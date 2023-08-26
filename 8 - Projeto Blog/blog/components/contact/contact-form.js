import classes from './contact-form.module.css'
import { useState } from 'react'

export default function ContactForm() {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredName, setEnteredName] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')

    function sendMessageHandler(evt) {
        evt.preventDefault()

        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage,
            })
        })
    }

    return <section className={classes.contact}>
        <h1>Fale comigo!</h1>
        <form onSubmit={sendMessageHandler} className={classes.form}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='email'>Seu email: </label>
                    <input type='email' id='email' value={enteredEmail} onChange={(evt) => setEnteredEmail(evt.target.value)} required /> 
                </div>
            </div>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='name'>Seu nome: </label>
                    <input type='text' id='name' value={enteredName} onChange={(evt) => setEnteredName(evt.target.value)} required /> 
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor='message'>Sua mensagem</label>
                <textarea id='message' rows='5' value={enteredMessage} onChange={(evt) => setEnteredMessage(evt.target.value)}></textarea>
            </div>

            <div className={classes.actions}>
                <button>Enviar</button>
            </div>
        </form>
    </section>
}