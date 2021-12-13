const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(2);
const position = Joi.string().min(2);
const nation = Joi.string().min(2);
const teamName = Joi.string().min(2);

const createPlayerSchema = Joi.object({
    name: name.required(),
    position: position.required(),
    nation: nation.required(),
    teamName: teamName.required()
});

const updatePlayerSchema = Joi.object({
    name: name,
    position: position,
    nation: nation,
    teamName: teamName
});

const getPlayerSchema = Joi.object({
    id: id.required(),
});

module.exports = { createPlayerSchema, updatePlayerSchema, getPlayerSchema }