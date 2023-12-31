import Link from "next/link"
import classes from './mainheader.module.css'

export default function MainHeader() {
    return <header className={classes.header}>
        <div className={classes.logo}>
            <Link href='/'>NextEvents</Link>
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
