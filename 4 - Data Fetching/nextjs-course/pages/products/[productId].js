import { Fragment } from "react";
import fs from "fs/promises";
import path from "path";

export default function ProductDetailPage(props) {
  const { loadedProduct } = props;
  if (!loadedProduct) {
    return <div>Loading...</div>; // esse indicador de loading é necessário
  }
  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.productId;

  const data = await getData();

  const product = data.products.find((d) => d.id === productId);

  if (!product) {
    return { 
      notFound: true 
    };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  // essa func diz que essa pagina tem que ser pré-criada com esses ids passados quando for feito o build
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const params = ids.map((id) => ({ params: { productId: id } }));

  return {
    paths: params,
    fallback: true, // faz com que so crie a pagina se necessário, mas demora mais um pouco
    // fallback fala ao next que podem existir mais parâmetros que o inicialmente descrito
  };
}
