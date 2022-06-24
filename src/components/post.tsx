import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

import { Avatar } from "./avatar";
import { Comment } from "./comment";
import classes from "./post.module.css";

import type { Author, Content } from "../common/types";
import { useGitHub } from "../context/useGithub";

interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState<{ text: string; author: Author }[]>(
    []
  );
  const [newCommentText, setNewCommentText] = useState("");

  const { followers, user } = useGitHub();

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();

    setComments((currentComments) => [
      ...currentComments,
      {
        text: newCommentText,
        author: {
          avatar: user?.avatar_url!,
          name: user?.name ?? user?.login!,
          role: "",
        },
      },
    ]);
    setNewCommentText("");
    toast.success("Novo comentário enviado");
  };

  const deleteComment = (comment: string) =>
    setComments((currentComments) =>
      currentComments.filter((commentText) => commentText.text !== comment)
    );

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  };

  const handleFormatInvalidMessage = (
    event: InvalidEvent<HTMLTextAreaElement>
  ) => {
    event.target.setCustomValidity("Esse campo é obrigatório");
  };

  useEffect(() => {
    const initialComments = followers.map(({ avatar_url, login }, index) => {
      let comment = "";

      switch (index) {
        case 0:
          comment = "Post muito bacana, hein!!!";
          break;
        case 1:
          comment = "Ficou fera demais!!! 🚀🔥";
          break;
        default:
          comment = "Me indica lá no teu trampo? 🤔😂";
      }

      return {
        author: {
          avatar: avatar_url,
          name: login,
          role: "",
        },
        text: comment,
      };
    });

    setComments(initialComments);
  }, [followers]);

  return (
    <article className={classes.post}>
      <header>
        <div className={classes.author}>
          <Avatar src={author?.avatar} />
          <div className={classes.authorInfo}>
            <strong>{author?.name}</strong>
            <span>{author?.role}</span>
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
        {content.map(({ type, text }) => {
          switch (type) {
            case "link":
              return (
                <p key={text}>
                  <a href="#">{text}</a>
                </p>
              );
            case "paragraph":
              return <p key={text}>{text}</p>;
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
        {comments.map(({ author, text }) => (
          <Comment
            author={author}
            key={text}
            text={text}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
