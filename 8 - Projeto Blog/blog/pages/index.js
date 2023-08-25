import { Fragment } from "react"
import Hero from "@/components/home/hero"
import FeaturedPosts from "@/components/home/featured-posts"

import { getFeaturedPosts } from "@/components/lib/posts-util"

export default function HomePage(props) {
    const {posts} = props
    return <Fragment>
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