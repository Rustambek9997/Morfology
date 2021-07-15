const authService = require('../service/AuthorincateService')

const mockUser = {
    username: 'neowise',
    password: 'parool',
    name: 'Neowise',
    surname: 'Logol',
    birthday: '10.01.1997',
    group: 'gui-101',
    phone: '+1 785 67-85'
}

const mockLogin = {
    username: 'neowise',
    password: 'parool'
}

async function register() {
    await authService.register(mockUser)
}

async function login() {
    let user = await authService.login(mockLogin.username, mockLogin.password)
    console.log(user)
} 

login()