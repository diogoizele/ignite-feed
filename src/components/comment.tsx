import classes from "./comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "./avatar";
import { useState } from "react";
import { Author } from "../common/types";

interface CommentProps {
  onDeleteComment: (text: string) => void;
  text: string;
  author: Author;
}

export function Comment({ text, onDeleteComment, author }: CommentProps) {
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 4));

  const handleDeleteComment = () => {
    onDeleteComment(text);
  };

  const handleLikeComment = () => {
    setLikeCount((current) => current + 1);
  };

  return (
    <div className={classes.comment}>
      <Avatar isComment src={author?.avatar} />
      <div className={classes.commentBox}>
        <div className={classes.commentContent}>
          <header>
            <div className={classes.authorAndTime}>
              <strong>{author?.name}</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-06-23 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{text}</p>
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
