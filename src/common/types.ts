export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface Content {
  text: string;
  type: "link" | "paragraph" | "hashtag";
}

export interface User {
  avatar_url: string | null;
  bio: string | null;
  blog: string | null;
  company: string | null;
  followers: number;
  following: number;
  html_url: string;
  login: string;
  name: string;
}

export interface Post {
  publishedAt: Date;
  id: number;
  author: Author;
  content: Content[];
}

export interface Follower {
  login: string
  html_url: string
  avatar_url: string
}