const db = require('../database')
const models = require('./models')

const SENTENCE_INSERT = "INSERT INTO Sentences(text) VALUES(?)"

const SENTENCE_ALL = 'SELECT Sentences.ID as ID, Sentences.text as text, Analized.analized_text as analized, ' +  
                        'Users.ID as author_id, Users.name as author_name, Users.surname as author_surname ' +
                        'FROM Sentences ' + 
                        'INNER JOIN Analized ON (Sentences.ID == Analized.sentence_id) ' +
                        'INNER JOIN Authors ON (Analized.ID == Authors.analized_id) ' +
                        'LEFT JOIN Users ON (Authors.user_id == Users.ID) '

const SENTENCE_BY_ID = SENTENCE_ALL + 'WHERE Sentence.ID == ?'
const SENTENCE_REMOVE = "DELETE FROM Sentences WHERE ID = ?"

class SentencesRepository {

    async insert(text) {
        await db.run(SENTENCE_INSERT, [text])
    }

    async findAll() {
        return await db.all(SENTENCE_ALL).map(e => new models.Sentence(e))
    }

    async findById(id) {
        const data = db.get(SENTENCE_BY_ID, [id])
        return new models.Sentence(data)
    }

    async remove(id) {
        await db.run(SENTENCE_REMOVE, [id])
    }
}

module.exports = new SentencesRepository()