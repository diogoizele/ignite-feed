import "./global.css";
import "react-toastify/dist/ReactToastify.css";
import classes from "./app.module.css";

import { ToastContainer } from "react-toastify";
import { GitHubProvider } from "./context/githubProvider/githubProvider";

import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { Post } from "./components/post";
import { Login } from "./components/login";

function App() {
  return (
    <>
      <GitHubProvider>
        <Header />
        <Login>
          {(posts) => (
            <div className={classes.wrapper}>
              <Sidebar />
              <main>
                {posts.map(({ author, content, id, publishedAt }) => (
                  <Post
                    key={id}
                    author={author}
                    content={content}
                    publishedAt={publishedAt}
                  />
                ))}
              </main>
            </div>
          )}
        </Login>
      </GitHubProvider>
      <ToastContainer
        toastStyle={{ backgroundColor: "#323238", color: "#c4c4cc" }}
        autoClose={3000}
      />
    </>
  );
}

export default App;
