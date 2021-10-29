import { IoIosCreate } from 'react-icons/io'

function NewPostButton({addPost}){

return(
<button className="new-post-button" onClick={addPost}>  Create Post <IoIosCreate/>  </button>
)

}

export default NewPostButton