const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('../sentences.db3', (err) => {
    if (err) {
        console.log(err.message)
    }
    else {
        console.log('Connected to database.')
    }
})

module.exports = db