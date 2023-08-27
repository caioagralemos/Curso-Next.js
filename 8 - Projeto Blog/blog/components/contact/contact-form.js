import classes from './contact-form.module.css'
import { useEffect, useState } from 'react'
import Notification from '../ui/notification'

async function sendContactData(contactData) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactData)
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || 'Algo deu Errado!')
    }
}

export default function ContactForm() {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredName, setEnteredName] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')
    const [requestStatus, setRequestStatus] = useState() // pending, success or error
    const [requestError, setRequestError] = useState() 

    useEffect(() => {
        if (requestStatus == 'success' || requestStatus == 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null)
                setRequestError(null)
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [requestStatus])

    async function sendMessageHandler(evt) {
        evt.preventDefault()

        setRequestStatus('pending')

        try {
            await sendContactData({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage,
            })

            setRequestStatus('success')
            setEnteredEmail('')
            setEnteredName('')
            setEnteredMessage('')
        } catch (error) {
            setRequestStatus('error')
            setRequestError(error.message)
        }
    }

    let notification;

    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Enviando mensagem...',
            message: 'Sua mensagem está a caminho!',
        }
    }

    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Sucesso!',
            message: 'Sua mensagem foi enviada!',
        }
    }

    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Algo deu errado :/',
            message: requestError,
        }
    }

    return <section className={classes.contact}>
        <h1>Fale comigo!</h1>
        <form onSubmit={sendMessageHandler} className={classes.form}>
        <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='name'>Seu nome: </label>
                    <input type='text' id='name' value={enteredName} onChange={(evt) => setEnteredName(evt.target.value)} required /> 
                </div>
            </div>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='email'>Seu email: </label>
                    <input type='email' id='email' value={enteredEmail} onChange={(evt) => setEnteredEmail(evt.target.value)} required /> 
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
        {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    </section>
}