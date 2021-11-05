const express = require('express');
const Resource = require('./model.js');

const router = express.Router()
router.get('/', (req,res,next) => {
    Resource.findAll(req.query)
    .then(resources => {
        res.json(resources)
    })
    .catch(next)
})
module.exports = router
