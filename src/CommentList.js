import React from 'react'
import Comment from './Comment'

function CommentList({comments, postid}) {
    return (
        <div>
            <h3> comments </h3>
            {comments.map(comment => <Comment
            name={comment.user_name}
            content={comment.comment}
            key={comment.id}
            />)}
        </div>
    )
}

export default CommentList
