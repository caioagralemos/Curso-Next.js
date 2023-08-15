import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Head from "next/head";
import { NotificationContextProvider } from "../store/notification-context";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          {/* conteúdo genérico que vai ser comum a todas as páginas, será subescrito por pags específicas */}
          <title>Next.js Events</title>
          <link rel="icon" type="image/png" href="https://c6f5v2h4.stackpathcdn.com/wp-content/themes/tickera/style/img/freebies/icons/events/7.png?x95122" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
