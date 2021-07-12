const db = require('../database/database')

const SENTENCE_INSERT = "INSERT INTO Sentences(text) VALUES(?)"
const SENTENCE_BY_ID = "SELECT * FROM Sentences WHERE ID = ?"
const SENTENCE_ALL = "SELECT * FROM Sentences"


"INSERT | DELETE | UPDATE"

module.exports = class SentencesRepository {

    addSentence(text) {
        db.run(SENTENCE_INSERT, [text], (err) => {
            if (err) {
                console.log("INSERT SENTENCE: " + err.message)
            }
        })
    }

    async allSentences() {
        const all = new Promise((resolve, reject) => {
            
            db.all(SENTENCE_ALL, (err, rows) => {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(rows)
                }
            })

        })
        try {
            const data = await all()
            return data
        }
        catch(err) {
            console.log(err)
            return []
        }
    }

    getSentence(id) {

    }
}