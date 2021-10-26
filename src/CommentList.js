import React from 'react'
import Comment from './Comment'

function CommentList({comments, id, deleteComment}) {
    return (
        <div>
            <h3> comments </h3>
            {comments.map(comment => <Comment
            name={comment.user_name}
            content={comment.comment}
            key={comment.id}
            id={comment.id}
            deleteComment={deleteComment}
            />)}
        </div>
    )
}

export default CommentList
