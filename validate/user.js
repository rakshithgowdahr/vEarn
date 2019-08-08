const Joi = require("joi");

function validateUser(data) {
  const schema = {
    name: Joi.string()
      .min(4)
      .max(16)
      .required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    c_password: Joi.any()
      .valid(Joi.ref("password"))
      .required()
      .options({ language: { any: { allowOnly: "must match password" } } }),
    phone: Joi.string()
      .min(6)
      .max(10)
      .required()
  };

  return Joi.validate(data, schema);
}

exports.validateUser = validateUser;
