const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    Name : {
        type : String,
        require : true
      },

      clientID :{
        type : Number,
        require : true   
      },
      referalID :{
        type : Number,
        require : true   
      }    
  });

  const persons = mongoose.model('persons', personSchema);

  module.exports = persons;