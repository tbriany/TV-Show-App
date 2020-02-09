import React, { Component } from 'react';
import { Link } from "react-router-dom";

const UserDisplay = (props) => {
    const {username, img, id} = props
    return (
        <li>
        <div>
        <Link to={`/users/${id}`}>
         <img src={img} alt="user avatar"></img><br></br>
         <h3>{username}</h3>
        </Link>
        </div>
        </li>
    )
}

export default UserDisplay;