const db = require('../database')

const SENTENCE_INSERT = "INSERT INTO Sentences(text) VALUES(?)"
const SENTENCE_BY_ID = "SELECT * FROM Sentences WHERE ID = ?"
const SENTENCE_ALL = "SELECT * FROM Sentences"

module.exports = class SentencesRepository {

    async addSentence(text) {
        await db.run(SENTENCE_INSERT, [text])
    }

    async allSentences() {
        return await db.all(SENTENCE_ALL)
    }

    async getSentence(id) {
        return await db.get(SENTENCE_BY_ID, [id])
    }
}