// getToken.js
function getToken() {
    const mongoose = require('mongoose');

    //connect to mongoose
    // TODO: Make config work and remove the connection string.
    const dbPath = 'mongodb+srv://backend:Smash123@cluster-test.jm4qz.mongodb.net/smash-test-data?retryWrites=true&w=majority';
    mongoose.connect(dbPath, { useUnifiedTopology: true, useNewUrlParser: true });
    var db = mongoose.connection;
    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    // Import Admin Model
    Admin = require('../models/adminModel.js');

    // Find all admins
    const admin = Admin.find(); // needs to take entered as arg
    console.log(admin);

};
getToken();