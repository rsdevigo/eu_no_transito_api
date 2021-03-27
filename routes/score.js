var ScoreController = require('../src/controllers/ScoreController');
var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET users listing. */
router.get(
  '/:id',
  passport.authenticate('authtoken', { session: false, optional: false }),
  ScoreController.fetchOne
);

module.exports = router;
