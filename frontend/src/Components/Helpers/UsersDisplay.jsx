import React, { Component } from 'react';
import { Link } from "react-router-dom";

const UserDisplay = (props) => {
    const { username, img, id } = props
    if (id === 5) {
        return (
            <li>
                <div class="row">
                    {/* <div class="col s12 m7"> */}
                        <div class="card">
                            <Link to={`/users/${id}`}>
                                    <img src={img} alt="user avatar"></img>
                                <div class="card-content">
                                <h3>{username}</h3>
                                <p>Logged In</p>
                                </div>
                            </Link>
                        </div>
                    {/* </div> */}
                </div>
            </li>
        )
    } else {
        return (
            <li>
                <div class="row">
                    <div class="col s12 m7">
                        <div class="card">
                            <Link to={`/users/${id}`}>
                                    <img src={img} alt="user avatar"></img>
                                <div class="card-content">
                                <h3>{username}</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default UserDisplay;