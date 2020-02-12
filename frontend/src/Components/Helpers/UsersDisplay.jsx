import React, { Component } from 'react';
import { Link } from "react-router-dom";

const UserDisplay = (props) => {
    const {username, img, id} = props
    return (
        <li>
        <Link to={`/users/${id}`}>
        <div>
         <img src={img} alt="user avatar"></img><br></br>
         <h3>{username}</h3>
        </div>
        </Link>
        </li>
    )
}

export default UserDisplay;