const sentencesRepo = require('../repository/SentencesRepository')

class SentencesService {

    add(sentence) {
        await sentencesRepo.insert(sentence)
    }

    remove(id) {
        return await sentencesRepo.remove(id)
    }

    findAll() {
        return await sentencesRepo.findAll()
    }

    findById(id) {
        return await sentencesRepo.findById(id)
    }
}

module.exports = new SentencesService()