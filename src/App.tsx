import "./global.css";
import "react-toastify/dist/ReactToastify.css";
import classes from "./app.module.css";

import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { Post } from "./components/post";
import { ToastContainer } from "react-toastify";

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatar: "https://github.com/diogoizele.png",
        name: "Diogo Izele",
        role: "Web developer",
      },
      content: [
        { type: "paragraph", text: "Fala galeraa 👋" },
        {
          type: "paragraph",
          text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", text: "diogoizele/doctorcare" },
        { type: "hashtag", text: "#novoprojeto" },
        { type: "hashtag", text: "#nlw" },
        { type: "hashtag", text: "#rocketseat" },
      ],
      publishedAt: new Date("2022-06-24 10:20:00"),
    },
  ];

  return (
    <div>
      <Header />
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
        <ToastContainer
          toastStyle={{ backgroundColor: "#323238", color: "#c4c4cc" }}
          autoClose={3000}
        />
      </div>
    </div>
  );
}

export default App;
