import React from 'react'
import { useState, useEffect } from "react"
import CommentList from './CommentList'

function Comment({id}) {

    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:9292/posts/${id}/comments`)
        .then(r => r.json())
        .then(commentData => setComments(commentData))
    }, []);


    const deleteComment = (commentId) => {
        const updatedComments = comments.filter((comment) => comment.id !== commentId);
        setComments(updatedComments);
      };

    return (
        <div>
        <CommentList
        comments={comments}
        deleteComment={deleteComment}
        />
        </div>
    )
}

export default Comment
