import classes from "./sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./avatar";
import { useGitHub } from "../context/useGithub";

export function Sidebar() {
  const { user } = useGitHub();

  return (
    <aside className={classes.sidebar}>
      <img
        className={classes.cover}
        src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=459&q=80"
      />

      <div className={classes.profile}>
        <Avatar
          src={user?.avatar_url!}
          alt={`Foto de perfil de ${user?.name}`}
        />
        <strong>{user?.name ?? user?.login}</strong>
        <span>{user?.bio}</span>
      </div>

      <footer>
        <a href={user?.html_url} target="_blank">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
