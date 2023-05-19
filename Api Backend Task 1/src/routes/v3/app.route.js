const express=require('express');
const { eventController } = require('../../controllers');
const validate = require('../../middlewares/validate');
const { eventValidation } = require('../../validations');

const router=express.Router();

router
  .route('/events')
  .post(validate(eventValidation.createEvent),eventController.createEvent)
  .get(validate(eventValidation.getEvent), eventController.getEvent);
router
  .route('/events/:id')
  .put(validate(eventValidation.getEvent), eventController.updateEvent)
  .delete(validate(eventValidation.deleteEvent), eventController.deleteEvent);

module.exports = router;