import Button from "../ui/Button";
import classes from "./eventsSearch.module.css";
import { useRouter } from "next/router";

export default function EventsSearch(props) {
  const router = useRouter()
  const handleSubmit = (evt) => {
    evt.preventDefault();
    router.push(`/events/${evt.target.year.value}/${evt.target.month.value}`)
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month">
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="7">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}
