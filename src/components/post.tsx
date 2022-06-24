import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { toast } from "react-toastify";

import { Avatar } from "./avatar";
import { Comment } from "./comment";
import classes from "./post.module.css";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(["Post muito bacana, hein!!!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (event) => {
    event.preventDefault();

    setComments((comments) => [...comments, newCommentText]);
    setNewCommentText("");
    toast.success("Novo comentário enviado");
  };

  const deleteComment = (comment) =>
    setComments((comments) =>
      comments.filter((content) => content !== comment)
    );

  const handleNewCommentChange = (event) => {
    event.target.setCustomValidity("");

    setNewCommentText(event.target.value);
  };

  const handleFormatInvalidMessage = (event) => {
    event.target.setCustomValidity("Esse campo é obrigatório");
  };

  return (
    <article className={classes.post}>
      <header>
        <div className={classes.author}>
          <Avatar src={author.avatar} />
          <div className={classes.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={classes.content}>
        {content.map(({ type, content }) => {
          switch (type) {
            case "link":
              return (
                <p key={content}>
                  <a href="#">{content}</a>
                </p>
              );
            case "paragraph":
              return <p key={content}>{content}</p>;
          }
        })}
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={classes.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe um comentário"
          onInvalid={handleFormatInvalidMessage}
          required
        />
        <footer>
          <button disabled={!newCommentText} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={classes.commentList}>
        {comments.map((content) => (
          <Comment
            key={content}
            content={content}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
