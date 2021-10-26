import React from 'react'

function Comment({name, content}) {
    return (
        <div className="comment-div">
            <h5 className="name">{name}</h5>
            <p className="comment">{content}</p>
        </div>
    )
}

export default Comment
