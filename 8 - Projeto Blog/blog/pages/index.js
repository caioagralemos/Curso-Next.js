import { Fragment } from "react"
import Hero from "@/components/home/hero"
import FeaturedPosts from "@/components/home/featured-posts"

import { getFeaturedPosts } from "@/components/lib/posts-util"
import Head from "next/head"

export default function HomePage(props) {
    const {posts} = props
    return <Fragment>
        <Head>
            <title>Home - CNBlog</title>
            <meta name="description" content='Bem vindo ao meu blog feito com Next.js!' />
        </Head>
        <Hero />
        <FeaturedPosts posts={posts}/>
    </Fragment>
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts()

    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 450,
    }
}