import classes from './hero.module.css'
import Image from 'next/image'

export default function Hero() {
    return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image src='/images/site/profile.jpg' alt='imagem mostrando Caio' width={300} height={300}/>
        </div>
        <h1>Olá, eu sou o Caio!</h1>
        <p>Eu escrevo sobre desenvolvimento web - 
            especialmente sobre frameworks como Next ou Django
        </p>
    </section>
    )
}