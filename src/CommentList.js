import React from 'react'
import Comment from './Comment'

function CommentList({comments, id, deleteComment, handleUpdatedComment}) {
    return (
        <div>
            <h3> comments </h3>
            {comments.map(comment => <Comment
            name={comment.user_name}
            comment={comment.comment}
            key={comment.id}
            id={comment.id}
            deleteComment={deleteComment}
            handleUpdatedComment={handleUpdatedComment}
            />)}
        </div>
    )
}

export default CommentList
