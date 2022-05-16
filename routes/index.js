var express = require('express');
var index = require('../lib/controllers')
var router = express.Router();

router.get('/', index.homepage);
router.get('/dashboard', index.dashboard);

module.exports = router;
