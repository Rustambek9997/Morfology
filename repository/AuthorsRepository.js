const db = require('../database')

const AUTHORS_INSERT = "INSERT INTO Authors(sentence_id, analized_id, user_id) VALUES(?, ?, ?)"
const AUTHORS_ALL = "SELECT Users.ID, Users.name, Users.surname, (SELECT count(*) FROM Analized WHERE Analized.user_id = Users.ID) as count FROM Users"

class AuthorsRepository {

    async insert(sentenceId, analizedId, userId) {
        await db.run(AUTHORS_INSERT, [sentenceId, analizedId, userId])
    }

    async findAll() {
        return await db.all(AUTHORS_ALL, [])
    }
}

module.exports = new AuthorsRepository()