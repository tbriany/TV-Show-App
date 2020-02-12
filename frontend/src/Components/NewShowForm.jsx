import React, { Component } from 'react';
import axios from 'axios';


class AddShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            loggedInUserID: props.loggedInUserID,
            img_url: '',
            show_name: '',
            selected_genre_id: '',
            genres: [],
            submitSuccessful: ''
        }
    }

    componentDidMount = async () => {
        try {
            const { data: { payload } } = await axios.get(`http://localhost:3001/genres/all`)
            this.setState({
                genres: payload
            })
        } catch (err) {
            console.log(err)
        }
    }

    handleImageInput = (event) => {
        this.setState({
            img_url: event.target.value
        })
    }

    handleShowNameInput = (event) => {
        this.setState({
            show_name: event.target.value
        })
    }

    handleSelectedGenre = async (event) => {
        console.log(event.target.value)
        this.setState({
            selected_genre_id: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {loggedInUserID, img_url, show_name, selected_genre_id} = this.state 

        let showInfo = {
            title: show_name,
            img: img_url,
            user_id: loggedInUserID,
           genre_id: selected_genre_id
        }

        try {
            const newShow = await axios.post(`http://localhost:3001/shows/add/`, showInfo)
            console.log(newShow)
            this.setState({
                submitSuccessful: 'Show was added successfully!'
            })
        } catch (err) {
            console.log(err)
            this.setState({
                submitSuccessful: "Show was not added successfully :("
            })
        }
    }



    render(){
    console.log(this.state)
    const {genres, submitSuccessful} = this.state 
    const {handleImageInput, handleShowNameInput, handleSelectedGenre, handleSubmit} = this

    let genreArr = genres.map(el => {return (
        <option key={el.genre_name} 
        value={el.id}>{el.genre_name}</option>
    )})

    return (
        <div>
            <h1>Add Show</h1>
            <h3>Form</h3>
            <form onSubmit={handleSubmit}>
                <label>Show Image Url</label>
                <input onChange={handleImageInput} placeholder="url"></input>

                <label>Show Name</label>
                <input onChange={handleShowNameInput} placeholder="Name"></input>

                <label>Genre</label>
                <select onChange={handleSelectedGenre}>
                    <option>--- Select a Genre ---</option>
                    {genreArr}
                </select>
                <button>Submit</button>
            </form>
            <p>{submitSuccessful}</p>
        </div>
    )
    }
}

export default AddShow;