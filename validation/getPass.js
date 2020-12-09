// getPass.js
module.exports = function getPass() {
    const mongoose = require('mongoose');
    run().catch(error => console.log(error.stack));
    async function run() {
        //connect to mongoose
        // TODO: Make config work and remove the connection string.
        const dbPath = 'mongodb+srv://backend:Smash123@cluster-test.jm4qz.mongodb.net/smash-test-data?retryWrites=true&w=majority';
        await mongoose.connect(dbPath, { useUnifiedTopology: true, useNewUrlParser: true });

        Admin = require('../models/adminModel.js');
        // Export Admin Model


        // Find all admins
        const admin = await Admin.find({ user: 'lizard' }); // needs to take entered as arg
        const pass = (admin[0]['pass']);
        console.log(pass);
        process.exit();
    };
};
getPass();