// getUser.js
const mongoose = require('mongoose');
getUser().catch(error => console.log(error.stack));
async function getUser() {
    //connect to mongoose
    // TODO: Make config work and remove the connection string.
    const dbPath = 'mongodb+srv://backend:Smash123@cluster-test.jm4qz.mongodb.net/smash-test-data?retryWrites=true&w=majority';
    await mongoose.connect(dbPath, { useUnifiedTopology: true, useNewUrlParser: true });
    Admin = require('../models/adminModel.js');
    // Find user
    const admin = await Admin.find({ user: 'adavidson' }); // needs to take entered as arg
    const user = await (admin[0]['user']);
    console.log(user);
    process.exit();

};