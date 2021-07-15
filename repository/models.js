class User {
    constructor(data) {
        this.name = data.name
        this.surname = data.surname
        this.birthday = data.birthday
        this.group = data.group
        this.phone = data.phone
    }
}

module.exports = {
    User : User,
}