import { Store, useStore } from "../store/store";

function Listing() {
  const { posts } = useStore<Store>((state) => state);

  return (
    <div className="list">
      {posts.map((posts) => {
        return (
          <li key={posts.id}>
            <h4>{posts.title}</h4>
            <p>{posts.body}</p>
          </li>
        );
      })}
    </div>
  );
}

export default Listing;
