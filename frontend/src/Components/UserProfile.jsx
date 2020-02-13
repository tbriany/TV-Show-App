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
            nowShows: ''
        }
    }

    componentDidMount = async () => {
        let user = await this.fetchUser()
        let showsArr = await this.fetchShows()

        if (showsArr.length === 0) {
            this.setState({
                username: user[0].username,
                pic_url: user[0].avatar_url,
                noShows: true
            })
        } else {
            this.setState({
                username: user[0].username,
                pic_url: user[0].avatar_url,
                shows: showsArr
            })
        }
 
    }

    fetchUser = async () => {
        const {currUserId} = this.state
        const { data: { payload } } = await axios.get(`http://localhost:3001/users/${currUserId}`)
        // console.log(payload)
        return payload 
    }

    fetchShows = async () => {
        const {currUserId} = this.state
        const { data: { payload } } = await axios.get(`http://localhost:3001/shows/user/${currUserId}`)
        // console.log(payload)
        return payload
    }


    render() {
        // console.log(this.state)
        const { currUserId, username, pic_url, shows, noShows } = this.state

        if (noShows) {
            return (
                <div>
                <img src={pic_url} alt="users avatar"></img>
                <h2>{username}</h2>
                <p>This user doesn't have any shows yet!</p>
                </div>
            )
        } else { 
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
                )
            })
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
}

export default UserProfile;