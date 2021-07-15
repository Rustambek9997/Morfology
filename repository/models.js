class User {
    constructor(data) {
        this.id = data.ID
        this.name = data.name
        this.surname = data.surname
        this.birthday = data.birthday
        this.group = data.group
        this.phone = data.phone
    }
}

class Sentence {
    constructor(data) {
        this.id = data.ID
        this.text = data.text
        this.author = {
            id: data.author_id,
            name: data.author_name,
            surname: data.author_surname,
        }
        this.analyzed = data.analized
    }
}

module.exports = {
    User : User,
    Sentence : Sentence
}