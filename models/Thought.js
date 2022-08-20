const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;