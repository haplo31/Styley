'use strict';

var express = require('express');
var controller = require('./publicrequest.controller');

var router = express.Router();

router.get('/most', controller.mostVotedPics)
router.get('/last', controller.last50Pics)
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
