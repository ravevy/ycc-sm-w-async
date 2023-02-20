import { useEffect } from "react";
import "./App.css";
import { Store, useStore } from "./store/store";
import Listing from "./components/Listing";
import NewPost from "./components/NewPost";

function App() {
  const { loaded, loadedTrue, posts, fetcher, setMaxId } = useStore<Store>(
    (state) => state
  );

  useEffect(() => {
    fetcher("https://jsonplaceholder.typicode.com/posts").then(loadedTrue);
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      setMaxId();
    }
  }, [loaded]);

  return (
    { loaded } && (
      <div className="App">
        <NewPost />
        <Listing />
      </div>
    )
  );
}

export default App;
