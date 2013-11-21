'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var StorySchema = new Schema({
  description: String,
  tech: Number,
  ux: Number,
  business: Number
});

var POINT_ERROR_MESSAGE = 'Point value must be between 1 and 5';

// Validations

StorySchema.path('tech').validate(function (num) {
  return num >= 1 && num <= 5;
}, 'POINT_ERROR_MESSAGE');

StorySchema.path('ux').validate(function (num) {
  return num >= 1 && num <= 5;
}, 'POINT_ERROR_MESSAGE');

StorySchema.path('business').validate(function (num) {
  return num >= 1 && num <= 5;
}, 'POINT_ERROR_MESSAGE');

mongoose.model('Story', StorySchema);
