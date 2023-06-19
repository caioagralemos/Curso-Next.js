import Link from "next/link";

function Home({ Component, pageProps }) {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {/* importante usar link aqui para não chamar requests */}
        {/* requests matam os states se houverem */}

        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>

        <li>
          <Link href="/clients">Clientes</Link>
        </li>

        <li>
          <Link href="/blog/0">Blog</Link>
        </li>

        <li>
          <Link href="/about">Sobre Mim</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
