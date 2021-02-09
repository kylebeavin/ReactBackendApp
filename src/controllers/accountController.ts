import {NextFunction, Request, Response} from 'express'
import Account from '../models/accountModel'
import {validationResult } from 'express-validator'


//for queries
export const view = async(req:Request, res:Response)=>{
    try{
       
    let allAccounts = await Account.find(req.body).sort({account_name:1}).exec()
    if(allAccounts){
        return res.status(200).json({
            status: "success",
            message: "Working",
            data: allAccounts
        })
    
    }
    }
catch(err){
    return res.status(500).json({
        status: "error",
        message: err.stack,
    })
}

}

//For creating new account

export const add = async (req:Request, res:Response)=>{
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        const {group_id,account_name,owner_id,owner_name, contacts, is_active, stage,geo_location, address_street, address_city,address_state,address_zip,email, demo, conversion, hauling_contract,hauling_expiration, national,referral,referral_group_id,notes} = req.body
        var account = new Account();
        account.group_id = group_id; // String, required
        account.account_name = account_name; // String, required
        account.owner_id = owner_id; // String, required
        account.owner_name = owner_name //string required
        account.contacts = contacts != null ? contacts : null; // Array, required // Will be null upon generation
        account.is_active = is_active; // Bool, required
        account.stage = stage; // String, required
        account.address_street = address_street != null ? address_street : null; // String, required
        account.address_city = address_city != null ? address_city : null; // String, required
        account.address_state = address_state != null ? address_state : null; // String, required
        account.address_zip = address_zip != null ? address_zip : null; // String, required
        account.email = email != null ? email : null; // String, required
        account.demo = demo != null ? demo : null; // Date, required
        account.conversion = conversion != null ? conversion : null; // Date, required
        account.hauling_contract = hauling_contract; // Bool, required
        account.hauling_expiration = hauling_expiration; // Date, required
        account.notes = req.body.notes != null ? notes : null; // String, required
        account.national = national; // Bool, required
        account.referral = referral; // Bool, required
        account.referral_group_id = referral_group_id != null ? referral_group_id : null; // String, required
        account.geo_location = geo_location // Add geo_location
         //Save and check error
         let newAccount = await account.save()
         if (newAccount) {
             res.status(201).json({
                 status: "success",
                 
                 message: "New Account Added!",
 
             })
         } else {
             res.status(304).json({ status: 'Failed to create account' })
         }
 
     } catch (err) {
         res.json({ message: err.message })
     }

    }

    // Update Account by Object Id
export const update = async function(req:Request, res:Response) {
    try {
        const data = {...req.body}
        let updatedAccount = await Account.findByIdAndUpdate(req.body._id, data,{new:true, useFindAndModify:false})

        
            if (updatedAccount) {
                res.status(200).json({
                    status: "success",
                    message: "Account Updated Successfully",
                    data: updatedAccount
                })
            } else {
                res.status(400).json({ message: 'Failed to update', status: 400 })
            }
        } 
     catch (err) {
        res.status(400).json({ message: err.message })
    }
};

// Delete Account by Object Id
export const remove = async (req:Request, res:Response) =>{
    try {
        let account = await Account.findOne({ _id: req.body._id }).exec()
        if (account) {
            account.account_name = account.account_name;
            account.address_city = account.address_city;
            account.address_state = account.address_state;
            account.address_street = account.address_street;
            account.address_zip = account.address_zip;
            account.contacts = account.contacts;
            account.conversion = account.conversion;
            account.demo = account.demo;
            account.email = account.email;
            account.geo_location = account.geo_location;
            account.group_id = account.group_id;
            account.hauling_contract = account.hauling_contract;
            account.hauling_expiration = account.hauling_expiration;
            account.is_active = false;
            account.owner_id = account.owner_id;
            account.owner_name = account.owner_name;
            account.national = account.national;
            account.notes = account.notes;
            account.referral = account.referral;
            account.referral_group_id = account.referral_group_id;
            account.stage = account.stage;

            if (account) {
                res.status(204).json({
                    status: "success",
                    
                    message: "account deactivated Successfully",
                    data: account
                })
            }
        } else {
            res.json({ message: 'Account not found' })
        }
    } catch (err) {
        res.json({ message: err.message })
    }
};

