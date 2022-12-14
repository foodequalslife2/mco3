const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    email:{
        type: String, required: true, immutable: true, unique:true
    },
    username:{
        type: String, required:true, immutable: true, unique:true
    },
    password:{
        type: String, required:true
    },
    bio:{
        type: String
    },
    profilepicture:{
        type: String
    },
    genrelove:{
        type: Array
    },
    finishread:{
        type:String
    },
    currentread:{
        type:String
    },
    planread:{
        type:String
    },
    top3books:{
        type: Array
    }
});

module.exports = mongoose.model('user', userschema);