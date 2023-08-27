import { useRouter } from "next/router"
import PostContent from "@/components/posts/post-detail/post-content";
import { getAllPaths, getSpecificPost } from "@/components/lib/posts-util";
import { Fragment } from "react";
import Head from "next/head";

export default function SinglePostPage(props) {
    const router = useRouter();
    const { slug } = router.query;
    return <Fragment>
        <Head>
            <title>CNBlog - {props.post.title}</title>
            <meta name="description" content={`Aqui eu falei um pouco sobre ${props.post.title}`} />
        </Head>
        <PostContent post={props.post} />
        </Fragment>
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