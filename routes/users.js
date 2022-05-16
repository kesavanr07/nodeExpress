var express = require('express');
var users = require('../lib/controllers/users')
var router = express.Router();

/* GET users listing. */
router.post('/', users.getUser);

module.exports = router;
