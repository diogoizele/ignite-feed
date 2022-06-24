import type { Follower, Post, User } from "../../common/types";

export interface GitHubContextSchema {
  user: User | null;
  posts: Post[];
  followers: Follower[];
  onLogin: (user: string) => void;
}
