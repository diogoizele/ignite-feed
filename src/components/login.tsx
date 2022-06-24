import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import { Post } from "../common/types";
import { useGitHub } from "../context/useGithub";

import classes from "./login.module.css";

interface LoginProps {
  children: (posts: Post[]) => ReactElement<string, any>;
}

export function Login({ children }: LoginProps) {
  const [userName, setUserName] = useState("");

  const { user, onLogin, posts } = useGitHub();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (userName !== "") {
      onLogin(userName);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  if (!user) {
    return (
      <div className={classes.loginContainer}>
        <form onSubmit={handleSubmit} className={classes.loginPapper}>
          <label>Entre com seu usuário do GitHub</label>
          <input autoFocus value={userName} onChange={handleInputChange} />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }

  return <>{children(posts)}</>;
}
