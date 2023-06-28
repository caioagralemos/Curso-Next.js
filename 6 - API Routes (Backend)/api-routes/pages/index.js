import { useRef, useState } from "react";

export default function Home() {
  const [feedbackItems, setFeedbackItems] = useState([])
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(evt) {
    evt.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, feedback: enteredFeedback };

    if (
      enteredEmail == "" ||
      enteredFeedback == "" ||
      (enteredEmail == "" && enteredFeedback == "")
    ) {
      alert("Um ou mais campos estão vazios!");
    } else {
      fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify(reqBody),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  }

  function loadFormHandler() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => {
        setFeedbackItems(data.feedback)
      });
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Seu email</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="email">Dê sua opinião</label>
          <textarea rows="5" id="feedback" ref={feedbackInputRef} />
        </div>
        <button>Enviar Feedback</button>
      </form>
      <hr />
      <button onClick={loadFormHandler}>Ver todas as Opiniões</button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
