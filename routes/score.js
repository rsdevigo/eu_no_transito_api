import ScoreController from '../src/controllers/ScoreController';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', ScoreController.fetchOne);

module.exports = router;
