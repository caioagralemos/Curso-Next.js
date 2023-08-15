import { Fragment } from "react";
import MainHeader from "./mainHeader";
import Notification from '../ui/notification'
import NotificationContext from "../../store/notification-context";
import { useContext } from "react";

export default function Layout(props) {
    const notificationCtx = useContext(NotificationContext)
    const activeNotification = notificationCtx.notification
    return <Fragment>
        <MainHeader />
        <main>
            {props.children}
        </main>
        {activeNotification && <Notification title={activeNotification.title} message={activeNotification.message} status={activeNotification.status}/>}
    </Fragment>
};
