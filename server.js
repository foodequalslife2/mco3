require('dotenv').config();

const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const mongoose = require("mongoose");


const port = process.env.PORT || 3000; 

mongoose.connect(process.env.MONGODB_URI || process.env.DB_URL, {useNewUrlParser: true});


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, '/views')));
app.use(bodyParser.urlencoded({extended:true}));

const route = require("./routes/route.js")
app.use('/', route);

app.listen(port, function(){
    console.log("Server started on port 3000");
});





