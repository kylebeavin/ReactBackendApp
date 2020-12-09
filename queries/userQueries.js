const mongoose = require('mongoose');

run().catch(error => console.log(error.stack));

async function run() {
    //connect to mongoose
    // TODO: Make config work and remove the connection string.
    const dbPath = 'mongodb+srv://backend:Smash123@cluster-test.jm4qz.mongodb.net/smash-test-data?retryWrites=true&w=majority';
    await mongoose.connect(dbPath, { useUnifiedTopology: true, useNewUrlParser: true });

    User = require('../models/userModel.js');
    // Export User Model


    // Find all customers
    const docs = await User.find({ group_id: 50 });
    console.log(docs);
    process.exit();
};