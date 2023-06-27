import Link from "next/link"
import classes from './mainheader.module.css'
import Image from "next/image"

export default function MainHeader() {
    return <header className={classes.header}>
        <div className={classes.logo}>
            <Link href='/'><Image className={classes.img} src="https://c6f5v2h4.stackpathcdn.com/wp-content/themes/tickera/style/img/freebies/icons/events/7.png?x95122" width={30} height={30}/>NextEvents</Link>
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
