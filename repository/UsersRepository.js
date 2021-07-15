const db = require('../database')

const USER_INSERT = "INSERT INTO Users(token, username, password, name, surname, birthday, 'group', phone) VALUES(?, ?, ?, ?, ?, ?, ?, ?)"
const USER_BY_ID = "SELECT * FROM Users WHERE ID = ?"
const USER_ALL = "SELECT * FROM Users"
const USER_BY_TOKEN = "SELECT * FROM Users WHERE token = ?"
const USER_BY_USERNAME = "SELECT * FROM Users WHERE username = ?"
const USER_REMOVE = "DELETE FROM Sentences WHERE ID = ?"

class SentencesRepository {

    async insert(token, user) {
        await db.run(USER_INSERT, [token, user.username, user.password, user.name, user.surname, user.birthday, user.group, user.phone])
    }

    async findAll() {
        return await db.all(USER_ALL)
    }

    async findById(id) {
        return await db.get(USER_BY_ID, [id])
    }

    async findByToken(token) {
        return await db.get(USER_BY_TOKEN, [token])
    }

    async findByUsername(username) {
        return await db.get(USER_BY_USERNAME, [username])
    }

    async remove(id) {
        await db.run(USER_REMOVE, [id])
    } 
}

module.exports = new SentencesRepository()