var ScoreController = require('../src/controllers/ScoreController');
var express = require('express');
var router = express.Router();
var passport = require('passport');
/* GET users listing. */
router.get(
  '/',
  passport.authenticate('authtoken', { session: false, optional: false }),
  ScoreController.list
);

router.post(
  '/',
  passport.authenticate('authtoken', { session: false, optional: false }),
  ScoreController.create
);

module.exports = router;
