import { createContext } from "react";

import type { GitHubContextSchema } from "./githubContext.types";

export const GitHubContext = createContext<GitHubContextSchema>(
  {} as GitHubContextSchema
);
