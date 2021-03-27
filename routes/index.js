var express = require('express');
var router = express.Router();
var passport = require('passport');
/* GET home page. */
router.get(
  '/',
  passport.authenticate('authtoken', { session: false, optional: false }),
  function (req, res, next) {
    res.render('index', { title: 'Express' });
  }
);

module.exports = router;
