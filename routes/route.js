const express = require('express');
const { model } = require ("mongoose");

const usercontroller = require('../controller/usercontroller.js');
const app = express();

app.get('/', usercontroller.displayindex);

app.get('/home', usercontroller.homepage);

app.post('/login', usercontroller.loginuser);

app.get('/changepw', usercontroller.displaychangepw);

app.get('/signUp', usercontroller.displaysignup);

app.post('/store_signup', usercontroller.storesignup);

app.get('/profilepage', usercontroller.displayprofilepage);

app.get('/genre', usercontroller.displaygenre);

app.get('/edit', usercontroller.displayedit);

app.post('/searchindex', usercontroller.searchbookindex);

app.post('/search', usercontroller.searchbook);

app.get('/bookinfo/:userId', usercontroller.displaybookinfo);




module.exports=app;