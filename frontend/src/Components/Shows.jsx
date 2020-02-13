import React, { Component } from 'react';
import axios from 'axios'
import ShowsDisplay from './Helpers/ShowsDisplay'



class Shows extends Component {
    constructor() {
        super()
        this.state = {
            shows: []
        }
    }

    componentDidMount = async () => {
        const firstArr = await this.fetchShows()
        const secondArr = await this.filterShows(firstArr)
        this.setState({
            shows: secondArr
        })
    }

    fetchShows = async () => {
        const { data: { payload } } = await axios.get('http://localhost:3001/shows/all')
        return payload
    }


    filterShows = (shows) => {
        let arr = []
        let obj = {}
        for (let i = 0; i < shows.length; i++) {
            if (!obj[shows[i].title]) {
                obj[shows[i].title] = {
                    title: shows[i].title,
                    img_url: shows[i].img_url,
                    genre: shows[i].genre_name,
                    watching: [{ username: shows[i].username, userid: shows[i].user_id }]
                }
            } else {
                obj[shows[i].title].watching.push({ username: shows[i].username, userid: shows[i].user_id })
            }
        }

        for (const el in obj) {
            arr.push(obj[el])
        }

        return arr
    }



    render() {
        const { shows } = this.state

        const showsMapped = shows.map(el => {
            return (
                <ShowsDisplay
                    key={el.title}
                    title={el.title}
                    img={el.img_url}
                    genre={el.genre_name}
                    watching={el.watching}
                />
            )
        })

        return (
            <div>
                <h1>All Shows</h1>
                <ul>
                    {showsMapped}
                </ul>
            </div>
        )
    }
}

export default Shows;