'use strict';

var express = require('express');

var router = express.Router();

var tabprices={ remPers:{basePrice:10, unitModPrice:0.2, quaPrice: [0,0.2,0.4],reputPrice: [0.15,0.25,0.40]},
				remObj:{basePrice:11, unitModPrice:0.3, quaPrice: [0,0.3,0.4],reputPrice: [0.1,0.2,0.30]},
				incr:{basePrice:9, quaPrice: [0,0.1,0.3],reputPrice: [0.2,0.3,0.5]}
			}

router.get('/:modtype', returnPrice);

function returnPrice(req, res) {
  return res.status(200).json(tabprices[req.params.modtype]);
}

module.exports = router;