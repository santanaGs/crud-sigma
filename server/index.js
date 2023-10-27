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

// LISTAR MÉDICOS
app.get('/doctors', (req, res) => {
    const data = db.Doctor.findAll().then((doctors) => {
        res.json(doctors)
    }).catch((err) => {
        console.log(err)
    })
})

// EDITAR MÉDICOS
app.put("/doctors", async (req, res) => {

    var dados = req.body;

    await db.Doctor.update(dados, { where: { id: dados.id } })
        .then(() => {
            return res.json({
                mensagem: "Médico editado com sucesso!"
            });
        }).catch(() => {
            return res.status(400).json({
                mensagem: "Médico não editado com sucesso!"
            });
        });
});

// DELETAR MÉDICO
app.delete("/doctors", async (req, res) => {
    const dados = req.body;

    try {
        const result = await db.Doctor.destroy({ where: { id: dados.id } });
        if (result) {
            return res.json({
                mensagem: "Médico deletado com sucesso!"
            });
        } else {
            return res.status(400).json({
                mensagem: "Nenhum médico foi encontrado para deletar."
            });
        }
    } catch (error) {
        console.error("Erro ao excluir médico:", error);
        return res.status(400).json({
            mensagem: "Erro ao excluir médico."
        });
    }
});

// Incluir Controllers
const createUser = require('./controllers/createUsers');
const createDoctor = require('./controllers/createDoctors');

// Criar as rotas
app.use('/createUser', createUser);
app.use('/createDoctor', createDoctor);

