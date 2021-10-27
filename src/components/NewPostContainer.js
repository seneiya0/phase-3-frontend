import { useState, useEffect } from "react"
import NewPostButton from "./NewPostButton"
import NewPostForm from "./NewPostForm"

function NewPostContainer(){
  const [state, setState] = useState('start')
  const [ postData, setPostData ] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/posts')
    .then(r => r.json())
    .then(data => setPostData(data))
  }, [])


  function addNewPost(post){
    setPostData([...postData, post])
  }

  return (
    <div>
    {state === 'start' && (
      <NewPostButton addPost={() => setState('add-post') } />
      )}
    {state === 'add-post' && <NewPostForm addNewPost={addNewPost} />}
    </div>)
}

export default NewPostContainer