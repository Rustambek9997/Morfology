const db = require('../database')

const ANALIZED_INSERT = "INSERT INTO Analized(sentence_id, type, analized_text) VALUES(?, ?, ?)"
const ANALIZED_BY_ID = "SELECT * FROM Analized WHERE ID = ?"
const ANALIZED_REMOVE = "DELETE FROM Analized WHERE ID = ?"

class AnalizedRepository {

    async insert(text) {
        await db.run(ANALIZED_INSERT, [text])
    }

    async findAll() {
        return await db.all(ANALIZED_BY_ID)
    }

    async findById(id) {
        return await db.get(ANALIZED_ALL, [id])
    }

    async remove(id) {
        await db.run(ANALIZED_REMOVE, [id])
    }
}

module.exports = new AnalizedRepository()