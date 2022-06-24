import classes from "./sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./avatar";

export function Sidebar() {
  return (
    <aside className={classes.sidebar}>
      <img
        className={classes.cover}
        src="https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={classes.profile}>
        <Avatar src="https://github.com/diogoizele.png" />
        <strong>Diogo Izele</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}