import { useRouter } from "next/router"
import { DUMMY_POST } from "@/data/dummy-posts";
import PostContent from "@/components/posts/post-detail/post-content";

export default function SinglePostPage(props) {
    const router = useRouter();
    const { slug } = router.query;

    return <PostContent post={DUMMY_POST}/>
}