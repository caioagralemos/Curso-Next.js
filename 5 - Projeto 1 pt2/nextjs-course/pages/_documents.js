import Document, { Html, Head, Main, NextScript } from "next/document";

// serve pra editar algo no documento html

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
