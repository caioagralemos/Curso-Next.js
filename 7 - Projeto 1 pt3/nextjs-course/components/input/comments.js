import { useState, useContext } from 'react';
import NotificationContext from '../../store/notification-context';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;

  const notificationCtx = useContext(NotificationContext);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);

    if(!showComments) {
      fetch('/api/comments/' + eventId).then(response => response.json()).then(data => {
        console.log(data.comments)
        setComments(data.comments)
      })
    }
  }

  function addCommentHandler(commentData) {
    notificationCtx.showNotification({
      title: 'Deixando comentário...',
      message: 'Colocando seu comentário na nossa base de dados',
      status: 'pending',
    })

    fetch('/api/comments/' + eventId, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        notificationCtx.showNotification({
          title: 'Sucesso!',
          message: 'Comentário adicionado com sucesso!',
          status: 'success',
        })
        setShowComments(true)
      }).catch(error => {
        notificationCtx.showNotification({
          title: 'Algo deu errado :(',
          message: `Não conseguimos te inscrever em nossa newsletter, tente novamente mais tarde ${error}`,
          status: 'error',
        })})
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
