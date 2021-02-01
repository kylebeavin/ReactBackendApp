//userController.js
//Import User Model
const User = require('../models/userModel.ts');
import {Request, Response } from 'express'


// import bcrypt
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var secret = process.env.ACCESS_TOKEN_SECRET;

// For queries - Sorts by first name
export const view = async (req:Request, res:Response)=> {
    try{
        let allUsers = await User.find({}).sort({first_name:1}).exec()
        if(allUsers){
            return res.status(200).json({
                status: "success",
                message: "Working",
                data: allUsers
            })
        
        }
    }
    catch(err){
        return res.status(500).json({
            status:'error',
            message: err.stack
        })
    }	
		
};

//for  creating a new user
export const add = async(req:Request, res:Response)=>{
    try {
		const user = new User();
		var hashedPassword = bcrypt.hashSync(req.body.password, 8);			// Hashed - String - Required
		var displayName = req.body.first_name + ' ' + req.body.last_name; 	// Concationation of first and last name
		user.email = req.body.email;                                      	// String Required
		user.display_name = displayName;									// String Required - input from displayName
		user.first_name = req.body.first_name;								// String Required
		user.group_id = req.body.group_id;									// String Group Document ID
		user.image = req.body.image != null ? req.body.image : null;	  	// Assigned Null
		user.last_name = req.body.last_name;								// String required
		user.password = hashedPassword;                                   	// String Required - input from hashedPassword
		user.role = req.body.role;											// String Required
		user.token = req.body.token != null ? req.body.token : null;	  	// Assigned Null


		//Save and check error
		let newUser = await user.save()
		if (newUser) {
			res.status(201).json({
				status: "success",
				
				message: "New user created!",
			})
		} 
		

	} catch (err) {
		res.json({ message: err })
	}
}

//for authenticatin user by token
export const auth = async (req:Request , res:Response)=>{

    try {
        let foundUser = User.findOne({token:req.body.token}).exec()
        if(foundUser){
            return res.status(200).json({message:'Token Valid', auth:true})
        }
		
	} catch (err) {
		res.json({ message: err.message })
	}


}

//for logging in
export const  login = async(req:Request, res:Response)=>{
    try{
        
    }



}