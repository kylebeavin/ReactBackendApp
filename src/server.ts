// server.js
import express, {Application , Request,Response , NextFunction} from 'express'
import path from 'path'
import mongoose from 'mongoose'
require('dotenv').config();
// import JWT
import jwt from 'jsonwebtoken'
//import helmet
import helmet from 'helmet'
//import cors
import cors from 'cors'
const dotenv = require('dotenv').config({ path: __dirname+'/.env' });

import  accountRoute from './routes/accountRoute'
import userRoute from './routes/userRoute'
import agreementRoute from './routes/agreementRoute'

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

const options = { useNewUrlParser: true, useUnifiedTopology: true }

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

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.use('/api', accountRoute);
app.use('/api', userRoute)
app.use('/api', agreementRoute )

app.listen(port, function() {
    console.log("Running Smash API on Port " + port);
});
