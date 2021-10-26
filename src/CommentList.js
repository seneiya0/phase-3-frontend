import React from 'react'
import Comment from './Comment'

function CommentList({comments}) {
    return (
        <div>
            {comments.map(comment => <Comment
            name={comment.user_name}
            content={comment.comment}
            id={comment.post_id}
            key={comment.post_id}
            />)}
        </div>
    )
}

export default CommentList
