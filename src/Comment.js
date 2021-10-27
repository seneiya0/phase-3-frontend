import React from 'react'

function Comment({name, content, id, deleteComment}) {

    const handleDelete = () => {
        deleteComment(id)
        fetch(`http://localhost:9292/comments/${id}`, {
        method: "DELETE",
        });
    }
    return (
        <div className="comment-div">
            <h5 className="name">{name}</h5>
            <p className="comment">{content}</p>
            <button>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Comment
