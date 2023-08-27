import ContactForm from "@/components/contact/contact-form";
import { Fragment } from "react";
import Head from "next/head";

export default function ContactPage() {
    return <Fragment>
        <Head>
            <title>Fale Comigo - CNBlog</title>
            <meta name="description" content='Página de contato do CNBLOG' />
        </Head>
        <ContactForm />
        </Fragment>
}