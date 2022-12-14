require('dotenv').config();

const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");

const session = require("express-session");


const port = process.env.PORT || 3000; 

mongoose.connect(process.env.MONGO_URI || process.env.DB_URL, {useNewUrlParser: true});

app.use(session({
    secret:"Password",
    cookie: {secure:false, maxAge:30000, expires:false, httpOnly:true},
    resave: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }), //Deployed
    // store: MongoStore.create({ mongoUrl: process.env.DB_URL }), //Local
    saveUninitialized: true,
    rolling: true
}))

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, '/views')));
app.use(bodyParser.urlencoded({extended:true}));

const route = require("./routes/route.js")
app.use('/', route);

app.listen(port, function(){
    console.log("Server started on port 3000");
    console.log(`http://localhost:` + port);
});