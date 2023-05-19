const { eventService } = require("../services");
const catchAsync = require("../utils/catchAsync")
const pick = require('../utils/pick');

const createEvent = catchAsync(async (req,res)=>{
  const body = req.body;
  const event = await eventService.createEvent(body);
  res.send(event._id);
});

const getEvent = catchAsync(async (req,res)=>{
  const { id } = req.query;
  const filter = pick(req.query, ['schedule']);
  const options = pick(req.query, ['sortBy', 'limit', 'page','type']);
  const event = await eventService.getEvent(id,filter,options);
  res.send(event);
})

const updateEvent = catchAsync(async (req,res)=>{
  const { id } = req.params;
  const body = req.body;
  const status = await eventService.updateEvent(id,body);
  res.send(status);
})

const deleteEvent = catchAsync(async (req,res)=>{
  const { id } = req.params;
  const status = await eventService.deleteEvent(id);
  res.send(status);
})
module.exports={
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent
}