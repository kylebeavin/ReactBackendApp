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
const accountRoutes = require("./routes/accountRoute");
const adminRoutes = require("./routes/adminRoute");
// const agreementRoutes = require("./routes/agreementRoute");
const contactRoutes = require("./routes/contactRoute");
const groupRoutes = require("./routes/groupRoute");
const inspectionRoutes = require("./routes/inspectionRoute");
const invoiceRoutes = require("./routes/invoiceRoute");
const locationRoutes = require("./routes/locationRoute");
const meetingRoutes = require("./routes/meetingRoute");
const orderRoutes = require("./routes/orderRoute");
const prospectRoutes = require("./routes/prospectRoute");
const serviceRoutes = require("./routes/serviceRoute");
const truckRoutes = require("./routes/truckRoute");
const userRoutes = require("./routes/userRoute");

// import jsonwebtoken
const jwt = require('jsonwebtoken');
//import .env secret keys
require('dotenv').config();


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
app.post('/api/login', (req, res) => {
    const username = req.body.username;
    const user = { name: username };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
})

//Use API routes in the App
app.use('/api', apiRoutes);
app.use('/api', accountRoutes);
app.use('/api', adminRoutes);
// // app.use('/api', agreementRoutes);
app.use('/api', contactRoutes);
app.use('/api', groupRoutes);
app.use('/api', inspectionRoutes);
app.use('/api', invoiceRoutes);
app.use('/api', locationRoutes);
app.use('/api', meetingRoutes);
// app.use('/api', orderRoutes);
app.use('/api', prospectRoutes);
// app.use('/api', serviceRoutes);
app.use('/api', truckRoutes);
app.use('/api', userRoutes);

// Launch app to the specified port
app.listen(port, function() {
    console.log("Running Smash API on Port " + port);
});