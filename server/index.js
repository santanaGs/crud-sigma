// Sequelize - DataBase
const db = require('./database/models/index')
const Student = require('./database/models/student')




// Express - Server
const express = require('express')
const app = express()
const port = 3000

const cors = require('cors')
app.use(cors())

app.use(express.json())


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

// Incluir Controllers
const createUser = require('./controllers/createUsers')

// Criar as rotas
app.use('/createUser', createUser)

