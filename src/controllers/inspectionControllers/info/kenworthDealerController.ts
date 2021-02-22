
import KenworthDealer from '../../../models/inspectionModels/info/kenworthDealerModel'
import {Request, Response } from 'express'

//for queries

export const view = async(req:Request, res:Response)=>{
    try{
    let allKenworthDealers = await KenworthDealer.find(req.body).sort({created_at:1}).exec()
    if(allKenworthDealers){
        return res.status(200).json({
            status: 200,
            message: "Working",
            data: allKenworthDealers
        })
    
    }
    }
catch(err){
    return res.status(500).json({
        status: 500,
        message: err.stack,
    })
}

}

//For creating new kenworthDealer
export const add = async function (req:Request, res:Response) {
    try {
        const kenworthDealer = new KenworthDealer();
        kenworthDealer.group_id = req.body.group_id;
        kenworthDealer.owner_id = req.body.owner_id;
        kenworthDealer.type = req.body.type;
        kenworthDealer.truck_id = req.body.truck_id;
        kenworthDealer.contact = req.body.contact;
        kenworthDealer.location = req.body.location;
        kenworthDealer.website = req.body.website;
        kenworthDealer.phone = req.body.phone;
        kenworthDealer.service_hours = req.body.service_hours;
        
        //Save and check error
        let newKenworthDealer = await kenworthDealer.save()
        if (newKenworthDealer) {
            res.status(201).json({
                status: 201,
                
                message: "New Kenworth Dealer inspection created!",
            })
        } else {
            res.json({ message:'Failed to create Kenworth Dealer inspection' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

//update kenworthDealer by object id

export const update = async function(req:Request, res:Response) {
    try {
        const data = {...req.body}
        let updatedKenworthDealer = await KenworthDealer.findByIdAndUpdate(req.body._id, data,{new:true, useFindAndModify:false})

        console.log(updatedKenworthDealer)
            if (updatedKenworthDealer) {
                return res.status(200).json({
                    status: 200,
                    message: "Kenworth Dealer Inspection Updated Successfully",
                    data: updatedKenworthDealer
                })
            } else {
                return res.status(400).json({ message: 'Failed to update'})
            }
        } 
     catch (err) {
        return res.status(400).json({status: 400, message: err.message })
    }
};

//delete by kenworthDealer id
