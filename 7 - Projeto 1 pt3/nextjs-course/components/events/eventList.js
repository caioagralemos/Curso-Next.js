import EventItem from "./eventItem"
import classes from './eventList.module.css'

export default function EventList({items}) {
    return (
        <ul className={classes.list}>
            {items.map(item => (
                <EventItem item={item} id={item.id}/>
            ))}
        </ul>
    )
};
