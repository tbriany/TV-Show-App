var express = require('express');
var router = express.Router();

/* on shows page. */
router.get('/', function(req, res, next) {
  res.send('Shows route')
});


/* GET all shows */
// shows/all
router.get('/all', async (req, res, next) => {
    try {
        res.status(200).json({
            message: "Success retrieved all shows from shows table",

        })
    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})

/* GET show by id */
// /shows/:id
router.get('/:id', async (req, res, next) => {
    try {
        res.status(200).json({
            message: "Success retrieved show by id",

        })
    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})

/* POST: add a new show */
// /shows/add
// body data: title, img_url, user_id, genre_id
router.post('/add', async (req, res, next) => {
    try {
        res.status(200).json({
            message: "Success added new show",

        })
    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})


/* GET all shows for specific genre_id */
// /shows/genre/:genre_id
router.get('/genre/:genre_id', async (req, res, next) => {
    try {
        res.status(200).json({
            message: "Success retrieved all shows for genre by id",

        })
    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})


/* GET all shows for specific user_id */
// /shows/user/:user_id
router.get('/user/:user_id', async (req, res, next) => {
    try {
        res.status(200).json({
            message: "Success retrieved all shows for user by id",

        })
    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})


module.exports = router;