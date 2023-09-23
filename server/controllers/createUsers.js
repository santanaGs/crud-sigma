const express = require('express');
const router = express.Router();
const db = require('../database/models')

router.post('/', async (req, res) =>{
    
    var data = req.body;

    await db.Student.create(data).then((dataUser) =>{
        return res.json({
            error: false,
            message: 'Aluno cadastrado',
            data: dataUser
        })
    }).catch((() => {
        return res.json({
            message: 'error'
        })
    }))
})

module.exports = router