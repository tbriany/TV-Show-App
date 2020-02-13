var express = require('express');
var router = express.Router();
var showQueries = require('../../queries/showQueries')


/* on shows page. */
router.get('/', function (req, res, next) {
    res.send('Shows route')
});

/* GET all shows */
router.get('/all', async (req, res, next) => {

    try {
        let allShows = await showQueries.getAllShows()
        res.status(200).json({
            message: "Success retrieved all shows from shows table",
            payload: allShows
        })

    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})

/* GET show by id */
router.get('/:id', async (req, res, next) => {

    let showId = req.params.id

    try {

        let show = await showQueries.getShowById(showId)

        res.status(200).json({
            message: "Success retrieved show by id",
            payload: show
        })

    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})

/* POST: add a new show */
router.post('/add', async (req, res, next) => {

    let showInfo = {
        title: req.body.title,
        img: req.body.img,
        user_id: req.body.user_id,
        genre_id: req.body.genre_id
    }

    if (showInfo.title == '' || showInfo.img == '') {
        res.status(404).json({
            message: "Failure"
        })

    } else {
        try {

            let newShow = await showQueries.addNewShow(showInfo)

            res.status(200).json({
                message: "Success added new show",
                payload: newShow
            })
        } catch (err) {
            console.log(err)
            res.status(404).json({
                message: "Failure"
            })
        }
    }
})


/* GET all shows for specific genre_id */
router.get('/genre/:genre_id', async (req, res, next) => {

    let genre_id = req.params.genre_id

    try {

        let shows = await showQueries.getShowsByGenre(genre_id)

        res.status(200).json({
            message: "Success retrieved all shows for genre by id",
            payload: shows
        })

    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})


/* GET all shows for specific user_id */
router.get('/user/:user_id', async (req, res, next) => {

    let user_id = req.params.user_id

    try {

        let shows = await showQueries.getShowsByUser(user_id)

        res.status(200).json({
            message: "Success retrieved all shows for user by id",
            payload: shows
        })

    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})


module.exports = router;