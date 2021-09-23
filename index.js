const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
dotenv.config({ path: './config.env' });
const route = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Allow", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
    next();
});

app.use('/', route);

mongoose.connect(process.env.DB,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });
app.listen(process.env.PORT || 1818, () => {
    console.log("server running", process.env.PORT);
});