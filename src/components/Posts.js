import {useState, useEffect} from 'react'

function Posts() {

  const [ postData, setPostData ] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/posts')
    .then(r => r.json())
    .then(data => setPostData(data))
  }, [])

  const posts = (postData.map((post) => (
    <div key={post.id} className='post' >
      <h4> {post.user_name} </h4>
      <img src={post.image} style={{width: '400px'}} alt=''></img>
      <p className='datetime'> {post.created_at} </p>
      <p> {post.caption} </p>
    </div>
  )))

  return(
    <div className="posts"> 
      {posts}
    </div>
  )

}

export default Posts


