import { useContext } from "react";
import { GitHubContext } from "./githubContext/githubContext";

export function useGitHub() {
  const context = useContext(GitHubContext);

  if (!context) {
    throw new Error(
      "useGitHub: Você deve estar dentro de um <GitHubProvider> para usar este hook"
    );
  }

  return context;
}
