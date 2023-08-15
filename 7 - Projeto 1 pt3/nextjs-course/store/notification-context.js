import { createContext, useState } from "react";

const NotificationContext = createContext({
    notification: null, // { title, message, status }
    showNotification: function(notificationData) {},
    hideNotification: function() {},
})

export function NotificationContextProvider(props) {
    const [activeNotification, setActiveNotification] = useState()

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