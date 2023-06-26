import Link from "next/link";
import classes from "./eventItem.module.css";
import Button from "../ui/Button";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon"
import DateIcon from "../icons/date-icon";
import { useRouter } from "next/router";

export default function EventItem({ item, id }) {
  const router = useRouter()
  const humanReadableDate = new Date(item.date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const location = item.location;
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img
        src={item.image}
        alt=""
        className={classes.icon}
      />
      <div className={classes.context}>
        <div className={classes.summary}>
          <h2>{item.title}</h2>
          <div className={classes.date}>
            <DateIcon/>
            <time><b>{humanReadableDate}</b></time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
      </div>
      <div className={classes.links}>
        <Button link={exploreLink}>
          <span>Explorar</span>
          <span className={classes.icon}><ArrowRightIcon /></span>
          </Button>
      </div>
    </li>
  );
}
