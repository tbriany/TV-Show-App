var express = require('express');
var router = express.Router();
var genreQueries = require('../../queries/genreQueries')


/* on genres page. */
router.get('/', function (req, res, next) {
    res.send('Genres route')
});


/* GET all genres */
router.get('/all', async (req, res, next) => {

    try {

        let allGenres = await genreQueries.getAllGenres()

        res.status(200).json({
            message: "Success retrieved all genres from genre table",
            payload: allGenres
        })

    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})


/* POST: add a new genre */
router.post('/add', async (req, res, next) => {

    let newGenre = req.body.genre_name

    try {
        let genreName = await genreQueries.addNewGenre(newGenre)
        
        res.status(200).json({
            message: "Success added new genre",
            payload: genreName
        })

    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})


module.exports = router;