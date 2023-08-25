import { useRouter } from "next/router"
import PostContent from "@/components/posts/post-detail/post-content";
import { getAllPaths, getSpecificPost } from "@/components/lib/posts-util";

export default function SinglePostPage(props) {
    const router = useRouter();
    const { slug } = router.query;
    return <PostContent post={props.post} />
}

export function getStaticProps({ params }) {
    const post = getSpecificPost(params.slug)
    return {
        props: {
            post
        }
    };
}

export function getStaticPaths() {
    const paths = getAllPaths().map(id => ({
        params: { slug: id }
      }));

    return {
        paths,
        fallback: false // Páginas não encontradas retornarão um 404
      };
} 