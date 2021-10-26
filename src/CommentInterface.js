import React from 'react'
import { useState, useEffect } from "react"
import CommentList from './CommentList'

function Comment({id}) {

    const [comments, setComments] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:9292/posts/${id}/comments`)
        .then(r => r.json())
        .then(commentData => setComments(commentData))
    }, [])


    return (
        <div>
        <CommentList
        comments={comments}
        />
        </div>
    )
}

export default Comment
