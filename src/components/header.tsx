import classes from "./header.module.css";
import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={classes.header}>
      <img src={igniteLogo} alt="Logo do Ignite Feed" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
