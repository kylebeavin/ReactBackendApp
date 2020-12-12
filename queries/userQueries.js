// getUser.js
const mongoose = require('mongoose');
const dbPath = 'mongodb+srv://backend:Smash123@cluster-test.jm4qz.mongodb.net/smash-test-data?retryWrites=true&w=majority';
mongoose
    .connect(dbPath, { useUnifiedTopology: true, useNewUrlParser: true })
    .catch((err) => {
        throw err;
    });
const UserModel = require('../models/userModel.js');
function getUsers(query = {}){
UserModel
    .find(query)
    .exec()
    .then((users) => {
        users
            .forEach((user) => {
                console.log (user);
            });
        mongoose.connection.close();
    })
    .catch((err) => {
        mongoose.connection.close();
        throw err;
    })
};
getUsers({email : 'lizard.king@smashmytrash.com'});