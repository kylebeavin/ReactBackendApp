
import EmergencyService from '../../../models/inspectionModels/info/emergencyServiceModel'
import {Request, Response } from 'express'

//for queries

export const view = async(req:Request, res:Response)=>{
    try{
    let allEmergencyServices = await EmergencyService.find(req.body).sort({created_at:1}).exec()
    if(allEmergencyServices){
        return res.status(200).json({
            status: "success",
            message: "Working",
            data: allEmergencyServices
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

//For creating new emergencyService
export const add = async function (req:Request, res:Response) {
    try {
        const emergencyService = new EmergencyService();
        emergencyService.group_id = req.body.group_id;
        emergencyService.owner_id = req.body.owner_id;
        emergencyService.type = req.body.type;
        emergencyService.truck_id = req.body.truck_id;
        emergencyService.provider_one = req.body.location;
        emergencyService.provider_two = req.body.location;
        emergencyService.provider_three = req.body.location;
        
        //Save and check error
        let newEmergencyService = await emergencyService.save()
        if (newEmergencyService) {
            res.status(201).json({
                status: "success",
                
                message: "New Emergency Service inspection created!",
            })
        } else {
            res.json({ message:'Failed to create Emergency Service inspection' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

//update emergencyService by object id

export const update = async function(req:Request, res:Response) {
    try {
        const data = {...req.body}
        let updatedEmergencyService = await EmergencyService.findByIdAndUpdate(req.body._id, data,{new:true, useFindAndModify:false})

        console.log(updatedEmergencyService)
            if (updatedEmergencyService) {
                return res.status(200).json({
                    status: "success",
                    message: "Emergency Service Inspection Updated Successfully",
                    data: updatedEmergencyService
                })
            } else {
                return res.status(400).json({ message: 'Failed to update'})
            }
        } 
     catch (err) {
        return res.status(400).json({ message: err.message })
    }
};

//delete by emergencyService id
