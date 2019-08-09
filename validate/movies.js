const Joi = require("joi");

function validateMovie(data) {
  const schema = {
    title: Joi.string()
      .min(3)
      .max(20)
      .required(),
    gnere: Joi.string()
      .min(3)
      .max(20)
      .required(),
    rate: Joi.number()
      .min(1)
      .max(10)
      .required()
  };
  return Joi.validate(data, schema);
}
exports.validateMovie = validateMovie;
