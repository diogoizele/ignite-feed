import { Header } from "./components/header";
import { Post } from "./Post";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, temporibus ut aspernatur atque sit non consequatur aliquam"
      />
    </div>
  );
}

export default App;
