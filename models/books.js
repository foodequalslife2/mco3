const mongoose = require('mongoose');

const booksschema = new mongoose.Schema({
    bookpicture:{
        type:String
    },

    booktitle:{
        type:String
    },
    bookauthor:{
        type:String
    },

    bookdate:{
        type: String
    }, 
    bookgenre:{
        type:Array
    },
    
    booksynopsis:{
        type:String
    }, 

    finishread:{
        type:String
    },
    currentread:{
        type:String
    },
    planread:{
        type:String
    }
});

module.exports = mongoose.model('books', booksschema);

