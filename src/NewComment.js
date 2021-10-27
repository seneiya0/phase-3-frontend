import React, { useState } from 'react'


function NewComment({addNewComment, id}) {
    const [userName, setUserName] = useState("")
    const [newComment, setNewComment] = useState("");

    const newCommentObj = {
        user_name: userName,
        comment: newComment,
        post_id: id
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:9292/comments", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCommentObj)
        })
        .then(r => r.json())
        .then(comment => 
            addNewComment(comment)
        )

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}

                />
                <input
                    id="comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                
                <button>Create</button>
            </form>
        </div>
    )
}

export default NewComment
