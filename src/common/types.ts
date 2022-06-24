export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface Content {
  text: string;
  type: "link" | "paragraph" | "hashtag";
}
