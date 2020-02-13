import React from 'react';

const CommentsDisplay = (props) => {
    const {comment, username} = props
    return (
        <li>
            <div className="card">
            <div className="card-content">
            <h5>{username}</h5>
            <p>{comment}</p>
            </div>
            </div>
        </li>
    )
}

export default CommentsDisplay;