import { useEffect } from 'react'
import './App.css'
import { PostType, Store, useStore} from './store'


function App() {
  const {loaded, loadedTrue, posts, fetcher, addPost, input, setInput, clearInput, maxid, setMaxId, increaseMaxId} = useStore<Store>((state) => state)
  
  useEffect(() => {
    fetcher("https://jsonplaceholder.typicode.com/posts")
    .then(loadedTrue)
  }, [])

  useEffect(() => {
    if(posts.length > 0){
      setMaxId()}
  }, [loaded])
  
  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setInput({[name]: value})
  }

  const handleClick = () => {
    if(input.title !== "" && input.body !== ""){
    addPost()
    increaseMaxId()
    clearInput()
  }}
  
  return ( <> loaded &&
    <div className="App">
        <div className='input'>
          <input type="text" placeholder='Title' name={"title"} value={input.title} onChange={handleChange}/>
          <input type="text" placeholder='Body' name={"body"} value={input.body} onChange={handleChange}/>
          <button onClick={handleClick}>Kaydet</button>
        </div>
      <div className='list'>
        {posts.map((posts)=>{return <li key={posts.id}><h4>{posts.title}</h4><p>{posts.body}</p></li>})}
      </div>
    </div>
  </>
  )
}

export default App