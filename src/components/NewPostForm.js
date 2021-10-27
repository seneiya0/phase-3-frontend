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
      <h3>Create a new post:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="name"
          value={user_name}
          onChange={(e) => setUser_Name(e.target.value)}
        />
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          placeholder="image url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="caption">Caption:</label>
          <input
            type="text"
            placeholder="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        <button className="post-button" type="submit">Post</button>
      </form>
    </div>
  );

}



export default NewPostForm