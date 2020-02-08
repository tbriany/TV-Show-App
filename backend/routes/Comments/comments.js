var express = require('express');
var router = express.Router();

/* on comments page. */
router.get('/', function(req, res, next) {
  res.send('Comments route')
});


/* GET all comments for specific show_id */
// /comments/show/:show_id
router.get('/show/:show_id', async (req, res, next) => {
    try {
        res.status(200).json({
            message: "Success retrieved all comments by show id",

        })
    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})


/* POST add a new comment */
// /comments/add
// body data: comment_body, user_id, show_id
router.get('/add', async (req, res, next) => {
    try {
        res.status(200).json({
            message: "Success added new comment",

        })
    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})



module.exports = router;