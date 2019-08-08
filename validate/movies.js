const Joi = require("joi");

function validateMovie(data) {
  const schema = {
    title: Joi.string().required(),
    gnere: Joi.string().required(),
    rate: Joi.number()
      .min(1)
      .max(10)
      .required()
  };
  return Joi.validate(data, schema);
}
exports.validateMovie = validateMovie;
