export default function UserIdPage(props) {
  return <h1>{props.id}</h1>;
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  const userId = params.userId;

  return {
    props: {
      id: "userid-" + userId,
    },
  };
}
