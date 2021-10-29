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
               comment={comment}
               id={id} 
               handleUpdatedComment={handleUpdatedComment}
            /> 
            ): (
            <>
            <h4 className="name">{name}</h4><br/>
            <p className="comment">{comment}</p>
            <button onClick={() => setEditing(!editing)} className="edit">⋮</button>
            <button onClick={handleDelete} className="delete">X</button>
            </>
            )}
            {/* <p className="comment">{comment}</p>
            <div>
                <button className="edit-button">Edit</button>
                <button className="delete-button" onClick={handleDelete}>Delete</button>
            </div> */}
        </div>
    )
}

export default Comment
