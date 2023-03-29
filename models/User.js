const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true, 
      required: true,
      trimmed: true
    },
    email: {
      type: String,
      unique: true, 
      required: 'Email is required',
      match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    },
    thoughts:{
    
    },
   friends: {

   },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = userSchema;