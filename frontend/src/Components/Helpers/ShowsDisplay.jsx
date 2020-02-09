import React, { Component } from 'react';

const ShowsDisplay = () => {
// pass props to check if its displaying the show on 
// the users profile page or on the shows endpoint displaying all shows 
 if ("displayingAllShows"){

    return (
        <li>
            <img></img>
            <h4>Title</h4>
            <p>Genre</p>
            <p>Being watched by</p>
        </li>
    )
 } else {
    return (
        <li>
            <img></img>
            <h4>Title</h4>
            <p>Genre</p>
        </li>
    )
 }

}

export default ShowsDisplay;