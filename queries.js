const mongoose = require('mongoose');

run().catch(error => console.log(error.stack));

async function run() {
    await mongoose.connect('mongodb+srv://backend:Smash123@cluster-test.jm4qz.mongodb.net/smash-test-data?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });

    User = require('./models/userModel.js');
    // Export User Model


    // Find all customers
    const docs = await User.find({ user_id: 1 });
    console.log(docs);
    process.exit();
};