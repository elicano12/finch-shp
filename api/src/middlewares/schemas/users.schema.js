const Joi = require("joi");

const createUserSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role_id: Joi.number().required(),
  }),
};

module.exports = { createUserSchema };
