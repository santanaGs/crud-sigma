const express = require('express');
const router = express.Router();
const db = require('../database/models')

router.post('/', async (req, res) =>{
    
    var data = req.body;

    await db.Paciente.create(data).then((dataUser) =>{
        return res.json({
            error: false,
            message: 'Paciente cadastrado',
            data: dataUser
        })
    }).catch((() => {
        return res.json({
            message: 'Paciente não cadastrado'
        })
    }))
})

module.exports = router