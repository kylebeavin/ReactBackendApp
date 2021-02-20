"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
var jwt = require('jsonwebtoken');
var secret = process.env.ACCESS_TOKEN_SECRET;
var verifyToken = function (req, res, next) {
    try {
        var token = req.headers['x-access-token'];
        if (!token) {
            return res.status(403).send({ auth: false, message: 'No token provided.' });
        }
        var decoded = jwt.verify(token, secret);
        if (decoded) {
            next();
        }
    }
    catch (err) {
        return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
};
exports.verifyToken = verifyToken;
