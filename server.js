// server.js
const express = require('express');
// import cookieparser
const cookieParser = require('cookie-parser');
// import body parser
const bodyParser = require('body-parser');
// import mongoose
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
// import JWT
const jwt = require('jsonwebtoken');
const helmet = require('helmet')
const cors = require('cors')

// import mongodb connection string
const config = require('config');
const router = require('./routes/routes');
// import routes
const apiRoutes = require("./routes/routes");
const accountRoutes = require("./routes/accountRoute");
const agreementRoutes = require("./routes/agreementRoute");
const contactRoutes = require("./routes/contactRoute");
const groupRoutes = require("./routes/groupRoute");
const inspectionRoutes = require("./routes/inspectionRoute");
const invoiceRoutes = require("./routes/invoiceRoute");
const locationRoutes = require("./routes/locationRoute");
const meetingRoutes = require("./routes/meetingRoute");
const orderRoutes = require("./routes/orderRoute");
<<<<<<< HEAD
=======
const serviceRoutes = require("./routes/serviceRoute");
>>>>>>> newFeature
const truckRoutes = require("./routes/truckRoute");
const userRoutes = require("./routes/userRoute");
const geoJsonRoutes = require('./routes/prospectsGeoJsonRoute')
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')


// configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// To parse cookies from the HTTP Request
app.use(cookieParser());
//use helmet as middleware
app.use(helmet())
app.use(cors())
    // connect to mongoose
const dbPath = config.get('mongoURI');
const options = { useNewUrlParser: true, useUnifiedTopology: true }
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
});
var db = mongoose.connection;

// Check DB Connection
if (!db)
    console.log("Error connecting db");
else
    console.log("DB Connected Successfully");

// Server Port
const port = process.env.PORT || 3000;

// Welcome/Login Site
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.get('/api', router)

// Add headers
app.use(require('./middleware/headers'));

//Use API routes in the App
app.use('/api', apiRoutes);
app.use('/api', accountRoutes);
app.use('/api', agreementRoutes);
app.use('/api', contactRoutes);
app.use('/api', geoJsonRoutes);
app.use('/api', groupRoutes);
app.use('/api', inspectionRoutes);
app.use('/api', invoiceRoutes);
app.use('/api', locationRoutes);
app.use('/api', meetingRoutes);
app.use('/api', orderRoutes);
<<<<<<< HEAD
app.use('/api', truckRoutes);
app.use('/api', userRoutes);
=======

// app.use('/api', serviceRoutes);
app.use('/api', truckRoutes);
app.use('/api', userRoutes);
app.use('/api', geoJsonRoutes)
//not found middleware
app.use(notFound)
//error handling middleware
//app.use(errorHandler)
    // Launch app to the specified port
>>>>>>> newFeature
app.listen(port, function() {
    console.log("Running Smash API on Port " + port);
});