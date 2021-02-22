var jwt = require('jsonwebtoken');
var secret = process.env.ACCESS_TOKEN_SECRET;
import {Request, Response, NextFunction } from 'express'

export const verifyToken = (req:Request, res:Response, next:NextFunction)=> {
    try{

        const token = req.headers['x-access-token'];
        if (!token){
            return res.status(403).send({ auth: false, message: 'No token provided.' });
        }
        const decoded = jwt.verify(token ,secret)
        if(decoded){
           next()
        }
     
    }
    catch(err){
        return res.status(500).send({ status: 500, auth: false, message: 'Failed to authenticate token.' });
    }
}
