'use strict';

var mongoose = require('mongoose'),
    Story = mongoose.model('Story'),
    async = require('async');

var StoryController = {
    index: function(req, res) {
        return Story.find(function (err, stories) {
            if (!err) {
                return res.json(stories);
            } else {
                return res.send(err);
            }
        });
    }
}

module.exports = StoryController;

