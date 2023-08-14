import classes from './comment-list.module.css';

function CommentList(props) {
  if (props.items.length > 0) {
    return (
      <ul className={classes.comments}>
        {props.items.map((item) => (
                <li key={item._id}>
                <p>{item.text}</p>
                <div>
                  By <address>{item.name}</address>
                </div>
              </li>
        ))}
      </ul>
    );
  }
}

export default CommentList;
