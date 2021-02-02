//userController.js
//Import User Model
import User from '../models/userModel'
import {Request, Response } from 'express'


// import bcrypt
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var secret = process.env.ACCESS_TOKEN_SECRET;

// For queries - Sorts by first name
export const view = async (req:Request, res:Response)=> {
    try{

        let allUsers = await User.find(req.body).sort({first_name:1}).exec()
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
		user.token = req.body.token !== null ? req.body.token : null;	  	// Assigned Null


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
        const filter = {email:req.body.email}
        let foundUser = await User.findOne({email:req.body.email}).exec()
        console.log(foundUser)
        if(foundUser){
            let passwordIsValid = bcrypt.compareSync(req.body.password, foundUser.password);
            if(!passwordIsValid){
                return res.status(400).json({auth:false, token:null})
            }

        }
        const  userToken = jwt.sign({ id: foundUser._id }, secret, {
			expiresIn: 50400 // expires in 14 hour(s)
        });
        await  User.updateOne(filter, {token:userToken})
        await foundUser.save()
      
        return res.status(200).json({
            message:'User logged in successfully',
            data: foundUser,
				auth: true,
				token: userToken
        })
    }
    catch(err){
        return res.status(500).json({
            error:err.stack
        })

    }

}

//for logging out 
export const logout = async (req:Request, res:Response)=>{
    try {
		let user = await User.findOne({ token: req.body.token }).exec()
		if (user) {
			user._id = user._id;
			user.display_name = user.display_name;
			user.email = user.email;
			user.first_name = user.first_name;
			user.group_id = user.group_id;
			user.image = user.image;
			user.is_active = user.is_active;
			user.last_name = user.last_name;
			user.password = user.password;
			user.role = user.role;
			user.token = null;
			if (user) {
				res.status(204).json({
					status: "success",
					message: "User logged out Successfully",
					data: user
				})
			} else {
				res.json({ message: 'Failed to logout', status: 400 })
			}
		} else {
			res.json({ message: 'User not found' })
		}
	} catch (err) {
		res.json({ message: err })
	}

}
//update the user
export const update = async(req:Request, res:Response)=>{
    try{
        const data = {...req.body}
        console.log(data)
        let updatedUser = await User.findByIdAndUpdate(req.body._id, data, {new:true, useFindAndModify:false})
        console.log(updatedUser)
        if(updatedUser){
         
           return  res.status(200).json({
                status:'success',
                message:"User updated successfully",
                data:updatedUser

            })
        }
        else{
            return res.status(400).json({
                message:'user not found'
            })
        }

    }
    catch(err){
       return  res.status(400).json({message:err.message})
    }

}

//delete the user

