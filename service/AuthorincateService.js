const userRepo = require('../repository/UsersRepository')
const models = require('../repository/models')
const exceptions = require('../exceptions')

const utils = require('../Utils')

class AuthorincateService {
    
    async login(username, password) {
        const token = utils.generateToken(username, password)
        const candidate = await userRepo.findByToken(token)

        if (candidate) {
            return new models.User(candidate)
        }
        
        throw new exceptions.UserNotFoundException(username)
    }

    async register(data) {
        const username = data.username
        const password = data.password

        const candidate = await userRepo.findByUsername(username)

        if (candidate) {
            throw new exceptions.UserAlreadyExistsException(username)
        }

        const token = utils.generateToken(username, password)

        await userRepo.insert(token, data)
    }
}

module.exports = new AuthorincateService()