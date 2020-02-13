import React, { Component } from 'react';
import axios from 'axios'
import UsersDisplay from './Helpers/UsersDisplay'

class Users extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount = async () => {
        const { data: { payload } } = await axios.get('http://localhost:3001/users/all')
        // console.log(payload)
        this.setState({
            users: payload
        })
    }

    render() {
        // console.log(this.state)
        const { users } = this.state
        const usersArr = users.map(el => {
            return (
                <UsersDisplay
                    key={el.id}
                    id={el.id}
                    username={el.username}
                    img={el.avatar_url}
                />
            )
        })
        return (
            <div>
                <h1>USERS</h1>
                <ul>
                    {usersArr}
                </ul>
            </div>
        )
    }
}

export default Users;