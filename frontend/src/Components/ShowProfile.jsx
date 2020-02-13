import React, { Component } from 'react';
import axios from 'axios';
import CommentsDisplay from './Helpers/CommentsDisplay';

class ShowProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedInUserID: this.props.loggedInUserID,
            showID: props.match.params.id,
            userID: props.match.params.userId,
            username: '',
            title: '',
            show_img: '',
            genre: '',
            num_of_comments: 0,
            comments: [],
            newComment: ''
        }
    }

    componentDidMount = async () => {
        let showInfo = await this.fetchShowInfo()
        let comments = await this.fetchComments()
        let username = await this.fetchUserName()
        //  console.log(showInfo)
        //  console.log(comments)
        //  console.log(username)
        this.setState({
            username: username[0].username,
            title: showInfo[0].title,
            show_img: showInfo[0].img_url,
            genre: showInfo[0].genre_name,
            num_of_comments: comments.length,
            comments: comments
        })
    }

    fetchShowInfo = async () => {
        let showID = this.state.showID
        try {
            const { data: { payload } } = await axios.get(`http://localhost:3001/shows/${showID}`)
            let showinfo = payload
            return showinfo
        } catch (err) {
            console.log(err)
        }
    }

    fetchComments = async () => {
        let showID = this.state.showID
        const { data: { payload } } = await axios.get(`http://localhost:3001/comments/show/${showID}`)
        // console.log(payload)
        let comments = payload
        return comments
    }

    fetchUserName = async () => {
        let userID = this.state.userID
        const { data: { payload } } = await axios.get(`http://localhost:3001/users/${userID}`)
        // console.log(payload)
        let username = payload
        return username
    }

    handleInput = (event) => {
        let newComment = event.target.value
        // console.log(newComment)
        this.setState({
            newComment: newComment
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { loggedInUserID, showID, newComment } = this.state

        let commentInfo = {
            comment_body: newComment,
            user_id: loggedInUserID,
            show_id: showID
        }
        try {
            const comment = await axios.post(`http://localhost:3001/comments/add/`, commentInfo)
            console.log(comment)
            this.updateComments()
        } catch (err) {
            console.log(err)
        }
    }

    updateComments = async () => {
        let comments = await this.fetchComments()
        this.setState({
            num_of_comments: comments.length,
            comments: comments
        })
    }


    render() {
        // console.log(this.state)
        const { username, title, show_img, genre, num_of_comments, comments } = this.state
        const { handleInput, handleSubmit } = this
        let commentsArr = comments.map(el => {
            return (
                <CommentsDisplay
                    key={el.comment_body}
                    comment={el.comment_body}
                    username={el.username}
                />
            )
        })
        return (
            <div>
                <div>
                    <h2>{title} on {username}'s Profile</h2>
                    <img src={show_img} alt="show avatar"></img>
                    <p>{genre}</p>
                    <p>{num_of_comments} comments</p>
                </div>

                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Comment" onChange={handleInput}></input>
                        <button>Add</button>
                    </form>
                    <ul>
                        {commentsArr}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ShowProfile;