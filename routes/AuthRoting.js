const express = require('express');

const userRepo = require('../repository/UsersRepository')
const models = require('../repository/models')
const utils = require('../Utils')

const router = express.Router();

router.get('/login', (request, response) => {

    const {username, password} = request.body
    const token = utils.generateToken(username, password)

    const candidate = userRepo.findByToken(token)

    if (candidate && runn) {
        const user = models.User(candidate)
        response.json({message: `Success. You are successfuly logined.`})   
        
        response.render('home.html', { user: user })
    }
    else {
        response.json({message: `Error. User '${username}' not found or password wrong.`})        
    }
})

router.post('/register', (request, response) => {
    
    const data = request.body

    const {username, password, confirmPassword} = request.body

})