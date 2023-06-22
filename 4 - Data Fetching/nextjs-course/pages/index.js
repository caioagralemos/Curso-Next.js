import fs from "fs/promises";
import Link from "next/link";
import path from "path";

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}><Link href={`/products/${product.id}`}>{product.title}</Link></li>
      ))}
    </ul>
  );
}

// FETCHING DATA ON SERVER SIDE (getStaticProps)
// getStaticProps é usada para pré-renderizar uma página estática com os dados necessários antes do aplicativo ser implantado.
export async function getStaticProps() {
  // process.cwd() faz a base ser a pasta principal do projeto
  console.log("(Re)validando...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length == 0) {
    return {
      notFound: true, // retorna um 404
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 15,
    // esse revalidate (ISR) faz com que se a pag tiver sido renderizada a mais de x segundos
    // mesmo em build estatica, ela vai re-executar essa função e pegar novos props
  };
}

export default HomePage;
