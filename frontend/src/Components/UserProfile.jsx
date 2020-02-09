import React, { Component } from 'react';
import axios from 'axios'

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

        const {data: {payload}} = await axios.get(`http://localhost:3001/shows/user/${userID}`)
        // console.log(payload)

        this.setState({
            shows: payload,
            username: payload[0].username,
            pic_url: payload[0].avatar_url
        })
    }

    render(){
    // console.log(this.props.match.params.id)
    console.log(this.state)
    const {username, pic_url, shows} = this.state
    return (
        <div>
            <h1>Welcome to Users Profile Page</h1>
        </div>
    )
 }
}

export default UserProfile;