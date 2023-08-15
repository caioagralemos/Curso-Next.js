import { createContext, useState } from "react";
import { useEffect } from "react";

const NotificationContext = createContext({
    notification: null, // { title, message, status }
    showNotification: function(notificationData) {},
    hideNotification: function() {},
})

export function NotificationContextProvider(props) {
    const [activeNotification, setActiveNotification] = useState()

    useEffect(() => {
        if (activeNotification && (activeNotification.status === 'success' || activeNotification.status === 'error')) {
            const timer = setTimeout(() => {
                setActiveNotification(null)
            }, 3000)

            return () => {
                clearTimeout(timer);
            }
        }
    }, [activeNotification])

    function showNotificationHandler(notificationData) {
        setActiveNotification({
            title: notificationData.title,
            message: notificationData.message,
            status: notificationData.status,
        })
    }

    function hideNotificationHandler() {
        setActiveNotification(null)
    }

    const context = {notification: activeNotification, showNotification: showNotificationHandler, hideNotification: hideNotificationHandler}

    // isso, pelo context passado, vai poder ser visto e ou alterado por qualquer elemento que esteja no escopo de children
    return <NotificationContext.Provider value={context}>{props.children}</NotificationContext.Provider>
}

export default NotificationContext;