const db = require('../database/db')


/* GET all genres */
const getAllGenres = async () => {
    const genres = await db.any("SELECT * FROM genres")
    return genres;
}

/* POST: add a new genre */
const addNewGenre = async (genre_name) => {

    const newGenreQuery = `
    INSERT INTO genres(genre_name)
        VALUES($1)
        RETURNING *`

    const newGenre = await db.one(newGenreQuery, [genre_name])
    return newGenre;
}

module.exports = {
    getAllGenres,
    addNewGenre
}