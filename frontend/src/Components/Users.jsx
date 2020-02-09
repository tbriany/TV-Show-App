import React, { Component } from 'react';
import axios from 'axios'

class Users extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount = async () => {
        const data = await axios.get('localhost:3001/users/all')
        console.log(data)
    }   

    render() {
        return (
            <div>
                <h1>USERS</h1>
            </div>
        )
    }
}

export default Users;