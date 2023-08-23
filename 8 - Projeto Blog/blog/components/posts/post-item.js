import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

export default function PostItem(props) {
  const { title, image, summary, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long", // 1 -> Janeiro
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
            {/* muito poderoso esse layout="responsive" */}
          <Image src={imagePath} alt={title} width={300} height={200} layout="responsive"/>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{summary}</p>
        </div>
      </Link>
    </li>
  );
}
