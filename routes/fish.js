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
	.put(function(req, res) {
		Fish.findById(req.params.fish_id, function(err, fish) { 
			
			if(err) {
				res.status(500).send('Something broke!');
			} else {
				fish.name = req.body.name ? req.body.name : fish.name;
				fish.color = req.body.color ? req.body.color : fish.color;
				fish.people_eater = req.body.people_eater ? req.body.people_eater : fish.people_eater;
				fish.length = req.body.length ? req.body.length : fish.length;
				fish.img = req.body.img ? req.body.img : fish.img;

				fish.save(function(err) {
					if(err) {
						res.status(500).send('Something broke!');
					} else {
						res.send("your fish was edited");
					}
				})
			}
		})
	})
	.delete(function(req, res) {
		Fish.remove({_id: req.params.fish_id}, function(err, fish) { 
			if(err) {
				res.status(500).send('Something broke!');
			} else {
				res.json("fish was deleted");
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