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
                <div className="container">
                
                <div className="row">
                <div className="col s12 m4 l8">
                <h2>Users</h2>

                <ul>
                    {usersArr}
                </ul>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Users;