import React from 'react'
import { useState, useEffect } from "react"
import CommentList from './CommentList'
import NewComment from './NewComment';

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

    const addNewComment = (comment) => {
        setComments([...comments, comment])

    }

    const handleUpdatedComment = (updatedComment) => {
        const updatedComments = comments.map((comment) => {
            if (comment.id === updatedComment.id) {
                return updatedComment
            } else {
                return comment
            }
        })
        setComments(updatedComments)
    }

    return (
        <div>
        <CommentList
        comments={comments}
        deleteComment={deleteComment}
        handleUpdatedComment={handleUpdatedComment}
        />
        <NewComment addNewComment={addNewComment} id={id}/>
        </div>
    )
}

export default Comment
