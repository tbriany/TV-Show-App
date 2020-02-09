var express = require('express');
var router = express.Router();
var commentQueries = require('../../queries/commentQueries')


/* on comments page. */
router.get('/', function (req, res, next) {
    res.send('Comments route')
});


/* GET all comments for specific show_id */
router.get('/show/:show_id', async (req, res, next) => {

    let show_id = req.params.show_id

    try {

        let comments = await commentQueries.getAllCommentsByShow(show_id)

        res.status(200).json({
            message: "Success retrieved all comments by show id",
            payload: comments
        })

    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})


/* POST add a new comment */
router.post('/add', async (req, res, next) => {

    let commentInfo = {
        comment_body: req.body.comment,
        user_id: req.body.user_id,
        show_id: req.body.show_id
    }

    try {

        let newComment = await commentQueries.addNewComment(commentInfo)

        res.status(200).json({
            message: "Success added new comment",
            payload: newComment
        })

    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})



module.exports = router;