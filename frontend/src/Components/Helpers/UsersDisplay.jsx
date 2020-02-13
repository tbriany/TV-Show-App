import React from 'react';
import { Link } from "react-router-dom";

const UserDisplay = (props) => {
    const { username, img, id } = props
    if (id === 5) {
        return (
            <li>
                <div className="card">
                    <Link to={`/users/${id}`}>
                        <div class="card-image">
                            <img src={img} alt="user avatar"></img>
                        </div>
                        <div className="card-content">
                            <h3>{username}</h3>
                            <p>Logged In</p>
                        </div>
                    </Link>
                </div>
            </li>
        )
    } else {
        return (
            <li>
                <div className="card">
                    <Link to={`/users/${id}`}>
                        <div class="card-image">
                            <img src={img} alt="user avatar"></img>
                        </div>
                        <div className="card-content">
                            <h3>{username}</h3>
                        </div>
                    </Link>
                </div>
            </li>
        )
    }
}

export default UserDisplay;