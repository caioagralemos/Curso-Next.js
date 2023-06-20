import Link from "next/link";
import classes from "./eventItem.module.css";

export default function EventItem({ item, id }) {
  const humanReadableDate = new Date(item.date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const location = item.location;
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item} key={id}>
      <img
        src={item.image}
        alt=""
        className={classes.icon}
      />
      <div className={classes.context}>
        <div className={classes.summary}>
          <h2>{item.title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <Link href={exploreLink}>Explore Event</Link>
      </div>
    </li>
  );
}
