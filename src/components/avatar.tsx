import { ImgHTMLAttributes } from "react";
import classes from "./avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  isComment?: boolean;
}

export function Avatar({ src, isComment, ...nativeImgProps }: AvatarProps) {
  return (
    <img
      className={!isComment ? classes.avatar : classes.avatarComment}
      src={src}
      {...nativeImgProps}
    />
  );
}
