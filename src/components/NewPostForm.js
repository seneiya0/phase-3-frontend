import {useState} from 'react'

function NewPostForm({addNewPost}){

  const [user_name, setUser_Name] = useState("");
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  const newPost = {
    user_name,
    image,
    caption
  };

  const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.reload();
    fetch("http://localhost:9292/posts", configObj)
      .then((r) => r.json())
      .then((post) => {addNewPost(post)});
  };

  return (
    <div>
      <h3 className="post-h">Create a new post:</h3>
      <form className="post-form"onSubmit={handleSubmit}>
        <input 
          className="name-input"
          type="text"
          placeholder="name:"
          value={user_name}
          onChange={(e) => setUser_Name(e.target.value)}
        />
        <input
          className="image-input"
          type="text"
          placeholder="image url:"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
          <input
            className="caption-input"
            placeholder="caption:"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        <button disabled={!user_name || !caption} className="post-button" type="submit">Post</button>
      </form>
    </div>
  );

}



export default NewPostForm