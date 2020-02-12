import React, { Component } from 'react';
import { Link } from "react-router-dom";


const ShowsDisplay = (props) => {
    const { title, img, genre, userID, showID } = props
    // pass props to check if its displaying the show on 
    // the users profile page or on the shows endpoint displaying all shows 
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
        return (
            <li>
                <img></img>
                <h4>Title</h4>
                <p>Genre</p>
                <p>Being watched by</p>
            </li>
        )
    }
}



export default ShowsDisplay;