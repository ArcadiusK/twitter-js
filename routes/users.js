var express = require('express');
var router = express.Router();
var store = require('../store');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/:name', function(req, res) {
  var name = req.params.name;
  var list = store.find({name: name});
 
res.render('index', { title: 'Twitter.js Arcadius', tweets: list, show_form: false });
});

module.exports = router;
