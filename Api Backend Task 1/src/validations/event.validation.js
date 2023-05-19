const Joi = require('joi');

const createEvent = {
  body: Joi.object().keys({
    type: Joi.string().required(),
    name: Joi.string().required(),
    tagline: Joi.string().required(),
    schedule: Joi.date().required(),
    description:Joi.string().required(),
    moderator:Joi.string().required(),
    category:Joi.string().required(),
    sub_category:Joi.string().required(),
    rigor_rank:Joi.number().required(),
    attendees: Joi.array(),
  }),
};

const getEvent = {
  query: Joi.object().keys({
    id: Joi.string(),
    type: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const updateEvent = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const deleteEvent = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

module.exports = {
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent,
};
