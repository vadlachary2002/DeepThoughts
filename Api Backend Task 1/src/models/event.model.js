const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { paginate } = require('./plugins');


const eventSchema = new Schema({
  type:{
    type:String,
    required: true,
  },
  uid:{
    type:String,
    required: true,
  },
  name:{
    type:String,
    required: true,
  },
  tagline:{
    type:String,
    required: true,
  },
  schedule: {
    type: Date,
    required: true,
  },
  description:{
    type:String,
    required: true,
  },
  moderator:{
    type:String,
    required: true,
  },
  category:{
    type:String,
    required: true,
  },
  sub_category:{
    type:String,
    required: true,
  },
  rigor_rank:{
    type:String,
    required: true,
  },
  attendees:{
    type:[String], 
  },
});

eventSchema.plugin(paginate);


const Event = mongoose.model('event', eventSchema);

module.exports = Event;