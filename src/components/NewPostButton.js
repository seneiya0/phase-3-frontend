function NewPostButton({addPost}){

return(
<button className="new-post-button" onClick={addPost}> <strong> + </strong> Create Post  </button>
)

}

export default NewPostButton