export default function UserProfilePage(props) {
  // não é possível pré renderizar essa página, pois cada user tem uma página diferente 
  // por isso utilizamos getServerSideProps, que faz as paginas serem renderizadas no servidor
  return <h1>{props.username}</h1>;
}

export async function getServerSideProps(context) {
  const { params, req, res } = context; // aqui temos acesso a request e response

  return {
    props: {
      username: "caio",
    },
  };
}
