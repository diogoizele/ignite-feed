import classes from "./comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "./avatar";

export function Comment() {
  return (
    <div className={classes.comment}>
      <Avatar isComment src="https://github.com/diogoizele.png" />
      <div className={classes.commentBox}>
        <div className={classes.commentContent}>
          <header>
            <div className={classes.authorAndTime}>
              <strong>Diogo Ize</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-06-23 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
