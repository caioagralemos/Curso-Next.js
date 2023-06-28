import { Fragment, useState } from "react";
import {
  buildFilePath,
  extractFeedback,
} from "../../components/helpers/api-helpers";
export default function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();

  function loadFeedbackHandler(id) {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  }

  return (
    <Fragment>
        {feedbackData && <p>{feedbackData[0].email}<br/>{feedbackData[0].id}</p> }
      <ul>
        {props.feedbackItems.map((item) => (
          <li>
            {item.text}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              show details
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  const filePath = buildFilePath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}
