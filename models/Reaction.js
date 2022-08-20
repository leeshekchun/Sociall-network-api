const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Reaction = model('Reaction', ReactionSchema);
module.exports = ReactionSchema;