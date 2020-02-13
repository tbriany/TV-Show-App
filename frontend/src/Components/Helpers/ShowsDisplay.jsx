import React, { Component } from 'react';
import { Link } from "react-router-dom";


const ShowsDisplay = (props) => {
    const { title, img, genre, userID, showID, watching } = props

    if (userID) {
        return (
            <li>
                <Link to={`/shows/${showID}/user/${userID}`}>
                    <div>
                        <img src={img} alt="show avatar"></img>
                        <h4>{title}</h4>
                        <p>{genre}</p>
                    </div>
                </Link>
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
                <img src={img} alt="show avatar"></img>
                <h4>{title}</h4>
                <p>{genre}</p>
                <p>Being watched by:</p>
                <ul>
                    {watchers}
                </ul>
            </li>
        )
    }
}



export default ShowsDisplay;