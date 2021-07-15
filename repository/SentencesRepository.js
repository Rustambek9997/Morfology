const db = require('../database')

const SENTENCE_INSERT = "INSERT INTO Sentences(text) VALUES(?)"
const SENTENCE_BY_ID = "SELECT * FROM Sentences WHERE ID = ?"
const SENTENCE_ALL = "SELECT * FROM Sentences"
const SENTENCE_REMOVE = "DELETE FROM Sentences WHERE ID = ?"

class SentencesRepository {

    async insert(text) {
        await db.run(SENTENCE_INSERT, [text])
    }

    async findAll() {
        return await db.all(SENTENCE_ALL)
    }

    async findById(id) {
        return await db.get(SENTENCE_BY_ID, [id])
    }

    async remove(id) {
        await db.run(SENTENCE_REMOVE, [id])
    }
}

module.exports = new SentencesRepository()