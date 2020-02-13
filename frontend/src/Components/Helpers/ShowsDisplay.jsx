import React from 'react';
import { Link } from "react-router-dom";


const ShowsDisplay = (props) => {
    const { title, img, genre, userID, showID, watching } = props

    if (userID) {
        return (
            <li>
                <div className="card">
                    <Link to={`/shows/${showID}/user/${userID}`}>
                      <div className="card-image">
                        <img src={img} alt="show avatar" ></img>
                        </div>
                        <div className="card-content">
                            <h4>{title}</h4>
                            <p>Genre: {genre}</p>
                        </div>
                    </Link>

                </div>
            </li>
        )
    } else {
        const watchers = watching.map(el => {
            return (
                <Link to={`/users/${el.userid}`} key={el.username}>
                    <li>
                        {el.username}
                    </li>
                </Link>
            )
        })
        return (
            <li>
                <div className="card">
                <div className="card-image">
                    <img src={img} alt="show avatar" ></img>
                    </div>
                    <div className="card-content">
                        <h4>{title}</h4>
                        <p>Genre: {genre}</p>
                        <p>Being watched by:</p>
                        <ul>
                            {watchers}
                        </ul>
                    </div>
                </div>
            </li>
        )
    }
}



export default ShowsDisplay;