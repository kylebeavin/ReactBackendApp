
import BigRigService from '../../../models/inspectionModels/info/bigRigServiceModel'
import {Request, Response } from 'express'

//for queries

export const view = async(req:Request, res:Response)=>{
    try{
    let allBigRigServices = await BigRigService.find(req.body).sort({created_at:1}).exec()
    if(allBigRigServices){
        return res.status(200).json({
            status: 200,
            message: "Working",
            data: allBigRigServices
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

//For creating new bigRigService
export const add = async function (req:Request, res:Response) {
    try {
        const bigRigService = new BigRigService();
        bigRigService.group_id = req.body.group_id;
        bigRigService.owner_id = req.body.owner_id;
        bigRigService.type = req.body.type;
        bigRigService.truck_id = req.body.truck_id;
        bigRigService.location = req.body.location;
        bigRigService.service_hours = req.body.service_hours;
        
        //Save and check error
        let newBigRigService = await bigRigService.save()
        if (newBigRigService) {
            res.status(201).json({
                status: 201,
                
                message: "New bigRigService inspection created!",
            })
        } else {
            res.json({ message:'Failed to create bigRigService inspection' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

//update bigRigService by object id

export const update = async function(req:Request, res:Response) {
    try {
        const data = {...req.body}
        let updatedBigRigService = await BigRigService.findByIdAndUpdate(req.body._id, data,{new:true, useFindAndModify:false})

        console.log(updatedBigRigService)
            if (updatedBigRigService) {
                return res.status(200).json({
                    status: 200,
                    message: "BigRigService Inspection Updated Successfully",
                    data: updatedBigRigService
                })
            } else {
                return res.status(400).json({ message: 'Failed to update'})
            }
        } 
     catch (err) {
        return res.status(400).json({status: 400, message: err.message })
    }
};

//delete by bigRigService id
