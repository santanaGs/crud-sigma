const express = require('express');
const router = express.Router();
const db = require('../database/models')

router.post('/', async (req, res) =>{
    
    var data = req.body;

    await db.Doctor.create(data).then((dataUser) =>{
        return res.json({
            error: false,
            message: 'Médico cadastrado',
            data: dataUser
        })
    }).catch((() => {
        return res.json({
            message: 'Médico não cadastrado'
        })
    }))
})

module.exports = router