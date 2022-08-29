const express = require('express');
const Joi = require('joi');

const userModel = require('../models/userModel');

const app = express();

app.use(express.json());

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body
  const { error } = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(6).required().messages({
      'string.min': `\"password\" length must be at least 6 characters long`,
    }),
  }).validate({ firstName, lastName, email, password });

  if (error) {
    res.status(400).json({ message: error.message });
  }

  const user = await userModel.create({ firstName, lastName, email, password });

  res.status(201).json();
});

app.listen(3001, () => console.log('listening on port 3001'));