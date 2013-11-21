'use strict';

var mongoose = require('mongoose'),
    Story = mongoose.model('Story');

//Clear old things, then add things in
Story.find({}).remove(function() {
	Story.create({ 
		description : 'Login',
		tech : 1,
		business: 3,
		ux: 5
	},
	{ 
		description : 'Colors',
		tech : 2,
		business: 5,
		ux: 6
	},
	{ 
		description : 'Buttons',
		tech : 1,
		business: 3,
		ux: 5
	},
	{ 
		description : 'Logout',
		tech : 2,
		business: 2,
		ux: 5
	}, function(err) {
			console.log('finished populating things');
		}
	);
});