import Link from "next/link"
import classes from './mainheader.module.css'

export default function MainHeader() {
    return <header className={classes.header}>
        <div className={classes.logo}>
            <Link href='/'><img className={classes.img} src="https://c6f5v2h4.stackpathcdn.com/wp-content/themes/tickera/style/img/freebies/icons/events/7.png?x95122" />NextEvents</Link>
        </div>
        <nav className={classes.navigation}>
            <ul>
                <li>
                    <Link href='/events'>Todos os Eventos</Link>
                </li>
            </ul>
        </nav>
    </header>
};
