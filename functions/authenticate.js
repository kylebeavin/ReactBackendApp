// // authenticate.js

// // import JWT
// const jwt = require('jsonwebtoken');

// exports.auth = function authenticateToken(req, res, next) {
//     console.log('test');
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     if (token == null) return res.sendStatus(401)

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         console.log(err)
//         if (err) return res.sendStatus(403)
//         req.user = user
//         next()
//     })
// }