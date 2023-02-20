import { Store, useStore } from "../store/store";

function NewPost() {
  const { addPost, input, setInput, clearInput, increaseMaxId } =
    useStore<Store>((state) => state);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInput({ [name]: value });
  };

  const handleClick = () => {
    if (input.title !== "" && input.body !== "") {
      addPost();
      increaseMaxId();
      clearInput();
    }
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Title"
        name={"title"}
        value={input.title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Body"
        name={"body"}
        value={input.body}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Kaydet</button>
    </div>
  );
}

export default NewPost;
