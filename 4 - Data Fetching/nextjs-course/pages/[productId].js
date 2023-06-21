import { Fragment } from "react";
import fs from "fs/promises";
import path from "path";

export default function ProductDetailPage(props) {
  const { loadedProduct } = props;
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
    return data
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.productId;

  const data = await getData()

  if(!data) {
    <p>Loading..</p>
    }

  const product = data.products.find((d) => d.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
    // essa func diz que essa pagina tem que ser pré-criada com esses ids passados quando for feito o build
    const data = await getData()
    const ids = data.products.map((product) => product.id)
    const params = ids.map((id) => ({params: {productId: id}}))

    return {
        paths: params,
        fallback: false // faz com que so crie a pagina se necessário, mas demora mais um pouco
    }
}
