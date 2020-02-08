const db = require('../database/db')


/* GET all comments for specific show_id */
const getAllCommentsByShow = async (show_id) => {
    const comments = await db.any("SELECT * FROM comments WHERE show_id = $1", [show_id])
    return comments;
}

/* POST add a new comment */
const addNewComment = async (comment) => {
    let comment_body = comment.comment_body
    let user_id = comment.user_id
    let show_id = comment.show_id

    const newCommentQuery = `
    INSERT INTO comments(comment_body, user_id, show_id)
        VALUES($1, $2, $3)
        RETURNING *`

    const newComment = await db.one(newCommentQuery, [comment_body, user_id, show_id])
    return newComment;
}

module.exports = {
    getAllCommentsByShow,
    addNewComment
}