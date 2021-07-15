const crypto = require('crypto-js')

class Utils {
    generateToken(username, password) {
        return crypto.SHA256(username + password).toString()
    }
}

module.exports = new Utils()