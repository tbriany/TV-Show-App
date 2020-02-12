import React, { Component } from 'react';
import axios from 'axios'
import ShowsDisplay from './Helpers/ShowsDisplay'

class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currUserId: this.props.match.params.id,
            username: '',
            pic_url: '',
            shows: [],
        }
    }

    componentDidMount = async () => {
        let userID = this.state.currUserId

        const { data: { payload } } = await axios.get(`http://localhost:3001/shows/user/${userID}`)
        // console.log(payload)

        this.setState({
            shows: payload,
            username: payload[0].username,
            pic_url: payload[0].avatar_url
        })
    }

    render() {
        // console.log(this.props.match.params.id)
        console.log(this.state)
        const { currUserId, username, pic_url, shows } = this.state
        const showsArr = shows.map(el => {
            return (
                <ShowsDisplay
                key={el.title}
                userID={currUserId}
                showID={el.id}
                title={el.title}
                img={el.img_url}
                genre={el.genre_name}
                />
        )})
        return (
            <div>
                <img src={pic_url} alt="users avatar"></img>
                <h2>{username}</h2>
                <ul>
                    {showsArr}
                </ul>
            </div>
        )
    }
}

export default UserProfile;