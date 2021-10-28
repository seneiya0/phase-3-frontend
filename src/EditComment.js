import React, { useState } from 'react'

function EditComment({comment, id, handleUpdatedComment}) {

    const [editedComment, setEditedComment] = useState(comment)

    const handleEditComment = (e) => {
        e.preventDefault();

        fetch(`http://localhost:9292/comments/${id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comment: editedComment})
        })
        .then(r => r.json())
        .then(newComment => handleUpdatedComment(newComment))
        
        window.location.reload();
    }

    return (
        <div>
            <form onSubmit={handleEditComment}>
                <input
                    id="comment"
                    type="text"
                    name="comment"
                    value={editedComment}
                    onChange={(e) => setEditedComment(e.target.value)}
                />
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}

export default EditComment
