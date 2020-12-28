// server.js
const express = require('express');
//import body parser
const bodyParser = require('body-parser');
//import mongoose
const mongoose = require('mongoose');
const app = express();
//import mongodb connection string
const config = require('config');
//import routes
const apiRoutes = require("./routes/routes");


//configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//connect to mongoose
const dbPath = config.get('mongoURI');
const options = { useNewUrlParser: true, useUnifiedTopology: true }
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
});
var db = mongoose.connection;

//Check DB Connection
if (!db)
    console.log("Error connecting db");
else
    console.log("DB Connected Successfully");

// Server Port
const port = process.env.PORT || 3000;

// Welcome/Login Site
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

// Authenticate using token to use API

//Use API routes in the App
app.use('/api', apiRoutes);

// Launch app to the specified port
app.listen(port, function() {
    console.log("Running Smash API on Port " + port);
});