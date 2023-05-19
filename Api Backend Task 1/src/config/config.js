const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    MONGODB_URL: Joi.string().default('mongodb://127.0.0.1:27017/dt').description('Mongo DB url') ,
    PORT: Joi.number().default(3000),
    FRONTEND_URL: Joi.string().default("http://localhost:8080"),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  port: envVars.PORT,
  frontend_url: envVars.FRONTEND_URL,
  mongoose: {
    url: envVars.MONGODB_URL,
  },
};
