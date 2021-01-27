// server.js
import express, {Application , Request,Response , NextFunction} from 'express'
// import cookieparser
import cookieParser from 'cookie-parser'
// import body parser
import bodyParser from 'body-parser'
// import mongoose
import mongoose from 'mongoose'
require('dotenv').config();
// import JWT
import jwt from 'jsonwebtoken'
//import helmet
import helmet from 'helmet'
//import cors
import cors from 'cors'
//import config
import config from 'config'
//importing routes
import apiRoutes from './routes/routes'
import  accountRoutes from './routes/accountRoute'
import  agreementRoutes from "./routes/agreementRoute"
import  contactRoutes from "./routes/contactRoute"
import  groupRoutes from "./routes/groupRoute"
import  inspectionRoutes from "./routes/inspectionRoute"
import invoiceRoutes from "./routes/invoiceRoute"
import  locationRoutes from "./routes/locationRoute"
import  meetingRoutes from "./routes/meetingRoute"
import orderRoutes from "./routes/orderRoute"
import  truckRoutes from "./routes/truckRoute"
import userRoutes from "./routes/userRoute"

//create app instant
const app: Application = express();
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
//connect to mongoose
// connect to mongoose
const dbPath = config.get('mongoURI');
const options = { useNewUrlParser: true, useUnifiedTopology: true }
const mongo = mongoose.connect(dbPath, options).catch(err=>console.log("Error",err))

mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
});

const db = mongoose.connection;

// Check DB Connection
if (!db)
    console.log("Error connecting db");
else
    console.log("DB Connected Successfully");

// Server Port
const port = process.env.PORT || 3000;

// Welcome/Login Site
import path from 'path'

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));


// Add headers
app.use(require('./middleware/headers'));

//Use API routes in the App
app.use('/api', apiRoutes);
app.use('/api', accountRoutes);
app.use('/api', agreementRoutes);
app.use('/api', contactRoutes);
app.use('/api', groupRoutes);
app.use('/api', inspectionRoutes);
app.use('/api', invoiceRoutes);
app.use('/api', locationRoutes);
app.use('/api', meetingRoutes);
app.use('/api', orderRoutes);
app.use('/api', truckRoutes);
app.use('/api', userRoutes);

// app.use('/api', serviceRoutes);
app.use('/api', truckRoutes);
app.use('/api', userRoutes);

// Launch app to the specified port
app.listen(port, function() {
    console.log("Running Smash API on Port " + port);
});
