var express = require('express');
var router = express.Router();
var Fish = require('../models/fish');

router.route('/')
	.post(function(req, res) {
		var fish = new Fish({
			name : req.body.name,
			color: req.body.color,
			people_eater: req.body.people_eater,
			length: req.body.length,
			img: req.body.img,
		})
		fish.save( function(err, fish){ 
			if(err) {
				res.status(500).send('Something broke!');
			} else {
				res.json(fish);
			}
		})
	})
	.get(function(req, res) {
		Fish.find(function(err, fishies) { 
			if(err) {
				res.status(500).send('Something broke!');
			} else {
				res.json(fishies);
			}
		})
	});


router.route('/oneFish/:fish_id')
	.get(function(req, res) {
		Fish.findById(req.params.fish_id, function(err, fish) { 
			if(err) {
				res.status(500).send('Something broke!');
			} else {
				res.json(fish);
			}
		})
	})
	
	.delete(function(req, res) {
		Fish.remove(req.params.fish_id, function(err, fish) { 
			if(err) {
				res.status(500).send('Something broke!');
			} else {
				res.json(fish);
			}
		})
	})

router.route('/maneater')
	.get(function(req, res) {
		Fish.find({ people_eater: true }, function(err, fish) { 
			if(err) {
				res.status(500).send('Something broke!');
			} else {
				res.json(fish);
			}
		})
	});

module.exports = router;