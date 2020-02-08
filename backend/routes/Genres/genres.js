var express = require('express');
var router = express.Router();

/* on genres page. */
router.get('/', function(req, res, next) {
  res.send('Genres route')
});


/* GET all genres */
// /genres/all
router.get('/all', async (req, res, next) => {
    try {
        res.status(200).json({
            message: "Success retrieved all genres from genre table",

        })
    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})


/* POST: add a new genre */
// /genres/add
// body data: genre_name 
router.post('/add', async (req, res, next) => {
    try {
        res.status(200).json({
            message: "Success added new genre",

        })
    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})


module.exports = router;