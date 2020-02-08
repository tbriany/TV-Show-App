var express = require('express');
var router = express.Router();

/* on users page. */
router.get('/', function(req, res, next) {
  res.send('Users route')
});


/* GET all users */
// /users/all 
router.get('/all', async (req, res, next) => {
    try {
        res.status(200).json({
            message: "Success retrieved all users from users table",

        })
    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})


/* GET user by id */
// /users/:id
router.get('/:id', async (req, res, next) => {
    try {
        res.status(200).json({
            message: `Success retrieved user by id `,

        })
    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})

/* POST: add a new user */
// /users/add
// body data: avatar_url, username
router.post('/add', async (req, res, next) => {
    try {
        res.status(200).json({
            message: "Success added user into users table",

        })
    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})




module.exports = router;