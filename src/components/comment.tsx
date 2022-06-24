import classes from "./comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "./avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  const handleLikeComment = () => {
    setLikeCount((current) => current + 1);
  };

  return (
    <div className={classes.comment}>
      <Avatar isComment src="https://github.com/diogoizele.png" />
      <div className={classes.commentBox}>
        <div className={classes.commentContent}>
          <header>
            <div className={classes.authorAndTime}>
              <strong>Diogo Izele</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-06-23 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button
            onClick={handleLikeComment}
            title="Aplausos são ilimitados! 👏"
          >
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
