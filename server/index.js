// Sequelize - DataBase
const db = require('./database/models')
const Student = require('./database/models/student')


// Express - Server
const express = require('express')
const app = express()
const port = 3000


app.get('/students', (req, res) => {
    const data = db.Student.findAll().then((users) => {
        res.json(users)
    }).catch((err) => {
        console.log(err)
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})

//ADICIONAR
const addUser = setTimeout(myFunction)
function myFunction() {

    // ADICIONA UMA COLUNA NO BANCO
    db.Student.create({
        firstName: 'Lucas', // <-- NOME DO USUARIO
        lastName: 'Santana',
        email: 'gabriel.santana@uscsonline.com.br',
        age: 20, // <-- IDADE DO USUARIO
        class: '3BN',
        registration: 123456
    })
}
