import { buildFilePath, extractFeedback } from "../../components/helpers/api-helpers";
export default function FeedbackPage(props) {
    console.log(props.feedbackItem)
    return (
        <div>
            <p>{props.feedbackItem[0].text}</p>
            <small>- {props.feedbackItem[0].email}</small>
        </div>
    )
};

export async function getStaticProps(context) {
    const id = context.params.id;
    const filePath = buildFilePath();
    const data = extractFeedback(filePath);
    const specificData = data.filter(d => d.id == id)
    return {
        props: {
            feedbackItem: specificData
        }
    }
}

export async function getStaticPaths() {
    const filePath = buildFilePath();
    const data = extractFeedback(filePath);
    const paths = data.map((event) => ({ params: { id: event.id } }));
    return {
      paths: paths,
      fallback: false
    };
  }