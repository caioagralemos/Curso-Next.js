import PostHeader from "./post-header";
import classes from './post-content.module.css'
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'

export default function PostContent(props) {
    const { post } = props
    const imagePath = `/images/posts/${post.slug}/${post.image}`;
    const components = {
        img: ({ node, ...props }) => (
            <Image {...props} src={`/images/posts/${post.slug}/${props.src}`} alt={props.alt} width={600} height={300} />
        ),
        code: ({...props}) => {
            const language = props.className.replace("language-", "");
            return (
            <SyntaxHighlighter style={atomDark} language={language}>
                {props.children}
            </SyntaxHighlighter>
        )
        }
    };
    return <article className={classes.content}>
        <PostHeader title={post.title} image={imagePath}/>
        <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
    </article>
}