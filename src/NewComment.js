import React, { useState } from 'react'
import { AiOutlineEnter } from 'react-icons/ai'
import { MdAddComment } from 'react-icons/md'


function NewComment({addNewComment, id}) {
    const [userName, setUserName] = useState("")
    const [newComment, setNewComment] = useState("");
    const [commentButton, setCommentButton] = useState(false)

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
            <h1 onClick={() => setCommentButton(!commentButton)}> <MdAddComment /> </h1>
             {commentButton ? (<form onSubmit={handleSubmit}>
                
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
                
                <button disabled={!userName || !newComment}className="create"> <AiOutlineEnter/> </button>
            </form>) : null }
        </div>
    )
}

export default NewComment
