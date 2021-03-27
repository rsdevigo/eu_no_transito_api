import ScoreController from '../src/controllers/ScoreController';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', ScoreController.list);

router.post('/', ScoreController.create);

module.exports = router;
