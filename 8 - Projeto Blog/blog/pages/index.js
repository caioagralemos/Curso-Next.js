import { Fragment } from "react"
import Hero from "@/components/home/hero"
import FeaturedPosts from "@/components/home/featured-posts"
import { DUMMY_POSTS } from "@/data/dummy-posts"


export default function Homepage() {
    return <Fragment>
        <Hero />
        <FeaturedPosts posts={DUMMY_POSTS.filter(post => post.featured == true)}/>
    </Fragment>
}