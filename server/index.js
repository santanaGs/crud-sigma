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

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})

// Express - Server

app.get('/doctors', (req, res) => {
    const data = db.Doctor.findAll().then((doctors) => {
        res.json(doctors)
    }).catch((err) => {
        console.log(err)
    })
})


app.put("/students", async (req, res) => {

    var dados = req.body;

    await db.Student.update(dados, { where: { id: dados.id } })
        .then(() => {
            return res.json({
                mensagem: "Usuário editado com sucesso!"
            });
        }).catch(() => {
            return res.status(400).json({
                mensagem: "VAI PRO CRLH"
            });
        });
});

// Incluir Controllers
const createUser = require('./controllers/createUsers');
const createDoctor = require('./controllers/createDoctors');

// Criar as rotas
app.use('/createUser', createUser);
app.use('/createDoctor', createDoctor);

