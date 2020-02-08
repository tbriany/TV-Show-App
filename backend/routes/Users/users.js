var express = require('express');
var router = express.Router();
var userQueries = require('../../queries/userQueries')

/* on users page. */
router.get('/', function (req, res, next) {
    res.send('Users route')
});


/* GET all users */
router.get('/all', async (req, res, next) => {

    try {
        let allUsers = await userQueries.getAllUsers()
        res.status(200).json({
            message: "Success retrieved all users from users table",
            payload: allUsers
        })

    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})


/* GET user by id */
router.get('/:id', async (req, res, next) => {

    let userId = req.params.id

    try {
        let user = await userQueries.getUserById(userId)
        res.status(200).json({
            message: `Success retrieved user by id `,
            payload: user
        })

    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})

/* POST: add a new user */
router.post('/add', async (req, res, next) => {

    let userInfo = {
        username: req.body.username,
        avatar_url: req.body.avatar_url
    }

    try {
        let newUser = await userQueries.addNewUser(userInfo)
        res.status(200).json({
            message: "Success added user into users table",
            payload: newUser
        })
        
    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Failure"
        })
    }
})




module.exports = router;