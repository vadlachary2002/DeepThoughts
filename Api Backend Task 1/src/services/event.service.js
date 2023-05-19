const { Event }=require('../models');
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

const createEvent = async (eventBody)=>{
  eventBody.uid = uuidv4();
  const event = await Event.create(eventBody);
  if(!event)  throw new Error('Failed to create event');
  return event;
}

const getEvent = async (eventId,filter,options)=>{
  if(eventId){
    const event = await Event.findOne({_id:eventId});
    if(!event) throw new Error("No Event Found");
    return event;
  }
  const events = await Event.paginate(filter,options);
  if(!events) throw new Error("No Events Found");
  return events;
}

const updateEvent = async (id,updatedEventBody)=>{
  if(!id) throw new Error("Incorrect event id");
  const event = await Event.updateOne({_id: id },{$set:updatedEventBody});
  const { modifiedCount } = event;
  if(modifiedCount==0) throw new Error("Nothing modified");
  return {
    "message":"Event Updated Successfully",
  }
}

const deleteEvent = async (id)=>{
  if(!id) throw new Error("Incorrect event id");
  const event = await Event.deleteOne({_id: id });
  console.log(event);
  return {
    "message":"Event Deleted Successfully",
  }
}
module.exports ={
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent
}