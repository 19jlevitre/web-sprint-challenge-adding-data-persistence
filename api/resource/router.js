const express = require('express')

const router = express.Router()
router.get('/', (req,res,next) => {
    return 'foo'
})
module.exports = router
