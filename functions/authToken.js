const jwt = require('jsonwebtoken');
const { exists } = require('../models/userModel');
const private_key = 'pizza1234';
const payload = { email = req.body.email, password = req.body.password };
// Create a JSON Web Token (JWT)
const token = jwt.sign(payload, private_key, { expiresIn: '5s' });
console.log(token);
// After 6s: verify signature (it will fail)
setTimeout(() => {
    const data = jwt.verify(token, private_key);
    console.log(data);
}, 6000)