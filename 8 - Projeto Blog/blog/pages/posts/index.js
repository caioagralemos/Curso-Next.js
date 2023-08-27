import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/components/lib/posts-util";
import { Fragment } from "react";
import Head from "next/head";

export default function AllPostsPage(props) {
    const { posts } = props
    return <Fragment>
        <Head>
            <title>Todos os Posts - CNBlog</title>
            <meta name="description" content='Veja todos os nossos posts aqui!' />
        </Head>
        <AllPosts posts={posts}/>
        </Fragment>
}

export function getStaticProps() {
    const allPosts = getAllPosts()


    return {
        props: {
            posts: allPosts
        },
        revalidate: 450,
    }
}