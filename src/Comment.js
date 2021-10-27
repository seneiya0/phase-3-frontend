import React, { useState } from 'react'
import EditComment from './EditComment';

function Comment({name, comment, id, deleteComment, handleUpdatedComment}) {
    const [editing, setEditing] = useState(false);

    const handleDelete = () => {
        deleteComment(id)
        fetch(`http://localhost:9292/comments/${id}`, {
        method: "DELETE",
        });
    }
    return (
        <div className="comment-div">
            {editing ? (
            <EditComment 
               name={name}
               content={comment}
               id={id} 
               handleUpdatedComment={handleUpdatedComment}
            /> 
            ): (
                <>
            <h5 className="name">{name}</h5>
            <p className="comment">{comment}</p>
            <button onClick={() => setEditing(!editing)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            </>
            )}
            <p className="comment">{content}</p>
            <div>
                <button className="edit-button">Edit</button>
                <button className="delete-button" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Comment
