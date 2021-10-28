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
        
        setNewComment("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Add Comment:</p>
                <input
                    id="username"
                    value={userName}
                    placeholder="username:"
                    onChange={(e) => setUserName(e.target.value)}
                    className="username"

                />
                <input
                    id="comment"
                    value={newComment}
                    placeholder="comment:"
                    onChange={(e) => setNewComment(e.target.value)}
                    className="addComment"
                />
                
                <button disabled={!userName || !newComment}className="create">Create</button>
            </form>
        </div>
    )
}

export default NewComment
