
import TireVendor from '../../../models/inspectionModels/info/tireVendorModel'
import {Request, Response } from 'express'

//for queries

export const view = async(req:Request, res:Response)=>{
    try{
    let allTireVendors = await TireVendor.find(req.body).sort({created_at:1}).exec()
    if(allTireVendors){
        return res.status(200).json({
            status: "success",
            message: "Working",
            data: allTireVendors
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

//For creating new tireVendor
export const add = async function (req:Request, res:Response) {
    try {
        const tireVendor = new TireVendor();
        tireVendor.group_id = req.body.group_id;
        tireVendor.owner_id = req.body.owner_id;
        tireVendor.type = req.body.type;
        tireVendor.truck_id = req.body.truck_id;
        tireVendor.location = req.body.location;
        tireVendor.service_hours = req.body.service_hours;
        
        //Save and check error
        let newTireVendor = await tireVendor.save()
        if (newTireVendor) {
            res.status(201).json({
                status: "success",
                
                message: "New Tire Vendor inspection created!",
            })
        } else {
            res.json({ message:'Failed to create Tire Vendor inspection' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

//update tireVendor by object id

export const update = async function(req:Request, res:Response) {
    try {
        const data = {...req.body}
        let updatedTireVendor = await TireVendor.findByIdAndUpdate(req.body._id, data,{new:true, useFindAndModify:false})

        console.log(updatedTireVendor)
            if (updatedTireVendor) {
                return res.status(200).json({
                    status: "success",
                    message: "Tire Vendor Inspection Updated Successfully",
                    data: updatedTireVendor
                })
            } else {
                return res.status(400).json({ message: 'Failed to update'})
            }
        } 
     catch (err) {
        return res.status(400).json({ message: err.message })
    }
};

//delete by tireVendor id
