import classes from "./avatar.module.css";

export function Avatar({ src, isComment }) {
  return (
    <img
      className={!isComment ? classes.avatar : classes.avatarComment}
      src={src}
    />
  );
}
