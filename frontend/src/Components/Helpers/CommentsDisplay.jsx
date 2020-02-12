import React, { Component } from 'react';

const CommentsDisplay = (props) => {
    const {comment, username} = props
    return (
        <li>
            <h4>{username}</h4>
            <p>{comment}</p>
        </li>
    )
}

export default CommentsDisplay;