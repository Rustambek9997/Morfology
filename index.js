const SentencesRepository = require('./repository/SentencesRepository')

const sentencesRepo = new SentencesRepository()

async function main() {
    console.log('All Sentences:')
    console.log(await sentencesRepo.findAll())
    console.log("get 5th sentence:")
    console.log(await sentencesRepo.findById(5))
}

main()