import AllPosts from "@/components/posts/all-posts";
import { DUMMY_POSTS } from "@/data/dummy-posts";

export default function AllPostsPage() {
    return <AllPosts posts={DUMMY_POSTS}/>
}