import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../api/github";
import { Follower, Post, User } from "../../common/types";
import { GitHubContext } from "../githubContext/githubContext";
import { GitHubContextSchema } from "../githubContext/githubContext.types";

import type { GitHubProviderProps } from "./githubProvider.types";

export function GitHubProvider({ children }: GitHubProviderProps) {
  const [userLogin, setUserLogin] = useState<string | null>();
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [followers, setFollowers] = useState<Follower[]>([]);

  const onLogin = (user: string) => {
    setUserLogin(user);
  };

  const contextValue: GitHubContextSchema = {
    user,
    posts,
    followers,
    onLogin,
  };

  useEffect(() => {
    const loadingData = async () => {
      try {
        const apiUrl = `/users/${userLogin}`;

        const { data } = await api.get<User>(apiUrl);

        setUser(data);
        setPosts([
          {
            id: 1,
            author: {
              avatar: data.avatar_url!,
              name: data.name ?? data.login,
              role: "",
            },
            content: [
              { type: "paragraph", text: "Fala galeraa 👋" },
              {
                type: "paragraph",
                text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
              },
              { type: "link", text: `${data.login}/doctorcare` },
              { type: "hashtag", text: "#novoprojeto" },
              { type: "hashtag", text: "#nlw" },
              { type: "hashtag", text: "#rocketseat" },
            ],
            publishedAt: new Date(),
          },
        ]);

        const { data: followers } = await api.get<Follower[]>(
          `${apiUrl}/followers`
        );

        const followersArray = [];

        for (let i = 0; i < 3; i++) {
          const followerIndex = Math.floor(
            Math.random() * (followers.length - 2) + 1
          );
          console.log(followerIndex);

          followersArray[i] = followers[followerIndex];
        }

        setFollowers(followersArray);
      } catch {
        toast.error("Usuário não encontrado");
      }
    };

    if (userLogin) {
      loadingData();
    }
  }, [userLogin]);

  console.log(followers);

  return (
    <GitHubContext.Provider value={contextValue}>
      {children}
    </GitHubContext.Provider>
  );
}
