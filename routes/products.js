const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    res.send('All Produtcts Fetched')
})

router.get('/:id', function(req, res, next){
    res.send('Fetched One Product')
})

module.exports = router