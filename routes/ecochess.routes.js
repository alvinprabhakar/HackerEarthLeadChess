const router = require('express').Router();
const chessServices = require('../services/ecochess.services');


router.get('/', chessServices.getDetails);

router.get('/:id', chessServices.getCodeDetails);


module.exports = router;