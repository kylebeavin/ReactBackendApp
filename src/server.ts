// server.js
import express, {Application , Request,Response , NextFunction} from 'express'
import path from 'path'
import mongoose from 'mongoose'
import expressValidator from 'express-validator'
require('dotenv').config();
//import helmet
import helmet from 'helmet'
//import cors
import cors from 'cors'
const dotenv = require('dotenv').config({ path: __dirname+'/.env' });

import  accountRoute from './routes/accountRoute'
import userRoute from './routes/userRoute'
import agreementRoute from './routes/agreementRoute'
import contactRoute from './routes/contactRoute'
import groupRoute from './routes/groupRoute'
import pretripRoute from './routes/pretripRoute'
import invoiceRoute from './routes/pretripRoute'
import orderRoute from './routes/orderRoute'
import truckRoute from './routes/truckRoute'
import meetingRoute from './routes/meetingRoute'
import routeRoute from './routes/routeRoute'
//create app instant
const app: Application = express();
// configure bodyparser to hande the post requests
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//use helmet as middleware
app.use(helmet())
app.use(cors())


const options = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true,useFindAndModify:false }

const mongo = mongoose.connect(process.env.DB_PATH||"", options).catch(err=>console.log("Error",err))

const db = mongoose.connection;

// Check DB Connection
if (!db)
    console.log("Error connecting db");
else
    console.log("DB Connected Successfully");

// Server Port
const port = process.env.PORT || 3000;

// Welcome/Login Site

// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.get('/api',(req:Request,res:Response)=>{
    res.status(200).send('Welcome to the Api')
})
app.use('/api', accountRoute);
app.use('/api', userRoute)
app.use('/api', agreementRoute )
app.use('/api', contactRoute)
app.use('/api', groupRoute)
app.use('/api', pretripRoute)
app.use('/api', invoiceRoute)
app.use('/api', orderRoute)
app.use('/api', truckRoute)
app.use('/api', meetingRoute)
app.use('/api', routeRoute)

app.listen(port, function() {
    console.log("Running Smash API on Port " + port);
});
