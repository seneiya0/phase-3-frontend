import {useState, useEffect} from 'react'
import CommentInterface from '../CommentInterface'


function Posts() {

  const [ postData, setPostData ] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/posts')
    .then(r => r.json())
    .then(data => setPostData(data))
  }, [])


  const posts = (postData.map((post) => (
    <div key={post.id} className='post' >
      <h3 className='user-name'> {post.user_name} </h3>
      <img src={post.image} style={{width: '400px'}} alt=''></img>
      <p className='caption'> {post.caption} </p><br/>
      <p className='datetime'> {post.created_at.split("T")[0].split("-")[1]}/{post.created_at.split("T")[0].split("-")[2]}/{post.created_at.split("T")[0].split("-")[0]} </p>
      <CommentInterface id={post.id}/>
    </div>
  )))


  return(
    <div>
      <div className="posts"> 
        {posts}
      </div> 
    </div>
  )

}

export default Posts


