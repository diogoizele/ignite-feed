import "./global.css";
import classes from "./app.module.css";

import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { Post } from "./components/post";

function App() {
  return (
    <div>
      <Header />
      <div className={classes.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
