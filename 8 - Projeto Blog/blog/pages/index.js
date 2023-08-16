import { Fragment } from "react"
import Hero from "@/components/home/hero"
import FeaturedPosts from "@/components/home/featured-posts"

export default function Homepage() {
    return <Fragment>
        <Hero />
        <FeaturedPosts />
    </Fragment>
}