const db = require('../database/db')


/* GET all shows */
const getAllShows = async () => {
    const allShows = await db.any("SELECT * FROM shows")
    return allShows;
}


/* GET show by id */
const getShowById = async (show_id) => {
    const show = await db.any("SELECT * FROM shows WHERE id = $1", [show_id])
    return show;
}


/* POST: add a new show */
const addNewShow = async (show) => {

    let title = show.title
    let img = show.img
    let user_id = show.user_id
    let genre_id = show.genre_id

    const newShowQuery = `
    INSERT INTO shows(title, img_url, user_id, genre_id)
        VALUES($1, $2, $3, $4)
        RETURNING *`

    const newShow = await db.one(newShowQuery, [title, img, user_id, genre_id])
    return newShow;
}



/* GET all shows for specific genre_id */
const getShowsByGenre = async (genre_id) => {
    const shows = await db.any("SELECT * FROM shows WHERE genre_id = $1", [genre_id])
    return shows;
}


/* GET all shows for specific user_id */
const getShowsByUser = async (user_id) => {
    const shows = await db.any("SELECT * FROM shows WHERE user_id = $1", [user_id])
    return shows;
}

module.exports = {
    getAllShows,
    getShowById,
    addNewShow,
    getShowsByGenre,
    getShowsByUser
}