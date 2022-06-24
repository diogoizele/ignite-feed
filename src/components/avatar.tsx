import classes from "./avatar.module.css";

interface AvatarProps {
  src: string;
  isComment?: boolean;
}

export function Avatar({ src, isComment }: AvatarProps) {
  return (
    <img
      className={!isComment ? classes.avatar : classes.avatarComment}
      src={src}
    />
  );
}
