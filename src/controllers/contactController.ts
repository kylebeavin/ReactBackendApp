import {NextFunction, Request, Response} from 'express'
import Contact from '../models/contactModel'

//for queries
export const view = async(req:Request, res:Response)=>{
    try{
    let allContacts = await Contact.find(req.body).exec()
    if(allContacts){
        return res.status(200).json({
            status: "success",
            message: "Working",
            data: allContacts
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

//For creating new contact
export const add = async function (req:Request, res:Response) {
    try {
        var contact = new Contact();
        contact.account_id = req.body.account_id;
        contact.email = req.body.email;
        contact.first_name = req.body.first_name;
        contact.is_active = req.body.is_active;
        contact.last_name = req.body.last_name;
        contact.method = req.body.method;
        contact.owner_id = req.body.owner_id;
        contact.phone = req.body.phone;
        contact.type = req.body.type;


        //Save and check error
        let newContact = await contact.save()
        if (newContact) {
            res.status(201).json({
                status: "success",
                message: "New contact created!",
            })
        } else {
            res.json({ status: 'Failed to create contact' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

//update contact by object id
export const update = async function(req:Request, res:Response) {
    try {
        const data = {...req.body}
        let updatedContact = await Contact.findByIdAndUpdate(req.body._id, data,{new:true, useFindAndModify:false})

        
            if (updatedContact) {
                res.status(200).json({
                    status: "success",
                    message: "Account Updated Successfully",
                    data: updatedContact
                })
            } else {
                res.status(400).json({ message: 'Failed to update', status: 400 })
            }
        } 
     catch (err) {
        res.status(400).json({ message: err.message })
    }
};

// Delete Account by _id
export const remove = async function (req:Request, res:Response) {
    try {
        let contact = await Contact.findOne({ _id: req.body._id }).exec()
        if (contact) {
            contact.account_id = req.body.account_id;
            contact.email = req.body.email;
            contact.first_name = req.body.first_name;
            contact.is_active = false
            contact.last_name = req.body.last_name;
            contact.method = req.body.method;
            contact.owner_id = req.body.owner_id;
            contact.phone = req.body.phone;
            contact.type = req.body.type;
            if (contact) {
                res.status(200).json({
                    status: "success",
                    message: "Contact deactivated Successfully",
                    data: contact
                })
            }
        } else {
            res.json({ message: 'Contact not found' })
        }
    } catch (err) {
        res.json({ message: err.message })
    }
};



