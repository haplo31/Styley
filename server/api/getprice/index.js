'use strict';

var express = require('express');

var router = express.Router();

var tabprices={ remPers:{basePrice:10, unitModPrice:0.2, quaPrice: [0,0.2,0.4],reputPrice: [0.15,0.25,0.40]}}

router.get('/:modtype', returnPrice);

function returnPrice(req, res) {
  return res.status(200).json(tabprices[req.params.modtype]);
}

module.exports = router;