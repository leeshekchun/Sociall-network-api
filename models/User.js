const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');




const User = model('User', UserSchema);
module.exports = User;