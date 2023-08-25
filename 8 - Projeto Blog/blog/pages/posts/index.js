import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/components/lib/posts-util";

export default function AllPostsPage(props) {
    const { posts } = props
    return <AllPosts posts={posts}/>
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