const db = require('../database/db')


/* GET all users */
const getAllUsers = async () => {
    const users = await db.any("SELECT * FROM users")
    return users;
}

/* GET user by id */
const getUserById = async (user_id) => {
    const user = await db.any("SELECT * FROM users WHERE id = $1", [user_id])
    return user;
}


/* POST: add a new user */
const addNewUser = async (user) => {
    let username = user.username
    let userAvatar = user.avatar_url

    const newUserQuery = `
    INSERT INTO users(username, avatar_url)
        VALUES($1, $2)
        RETURNING *`

    const newUser = await db.one(newUserQuery, [username, userAvatar])
    return newUser;
}

module.exports = {
    getAllUsers,
    getUserById,
    addNewUser
}