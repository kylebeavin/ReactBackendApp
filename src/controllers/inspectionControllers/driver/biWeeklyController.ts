
import BiWeekly from '../../../models/inspectionModels/driver/biWeeklyModel'
import {Request, Response } from 'express'

//for queries

export const view = async(req:Request, res:Response)=>{
    try{
    let allBiWeeklys = await BiWeekly.find(req.body).sort({created_at:1}).exec()
    if(allBiWeeklys){
        return res.status(200).json({
            status: "success",
            message: "Working",
            data: allBiWeeklys
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

//For creating new biWeekly
export const add = async function (req:Request, res:Response) {
    try {
        const biWeekly = new BiWeekly();
        biWeekly.group_id = req.body.group_id;
        biWeekly.owner_id = req.body.owner_id;
        biWeekly.type = req.body.type;
        biWeekly.truck_id = req.body.truck_id;
        biWeekly.odometer_reading = req.body.odometer_reading;
        biWeekly.hydraulic_pump = req.body.hydraulic_pump;
        biWeekly.hydraudic_cylinder = req.body.hydraudic_cylinder;
        biWeekly.sprocket_motor = req.body.sprocket_motor;
        biWeekly.boom_arm = req.body.boom_arm;
        biWeekly.boom_drum = req.body.boom_drum;
        biWeekly.machine_assemby = req.body.machine_assemby;
        biWeekly.hook_mount = req.body.hook_mount;
        biWeekly.vehicle_condition = req.body.vehicle_condition;
        biWeekly.drivers_signature = req.body.drivers_signature;
        
        //Save and check error
        let newBiWeekly = await biWeekly.save()
        if (newBiWeekly) {
            res.status(201).json({
                status: "success",
                
                message: "New BiWeekly inspection created!",
            })
        } else {
            res.json({ message:'Failed to create BiWeekly inspection' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

//update biWeekly by object id

export const update = async function(req:Request, res:Response) {
    try {
        const data = {...req.body}
        let updatedBiWeekly = await BiWeekly.findByIdAndUpdate(req.body._id, data,{new:true, useFindAndModify:false})

        console.log(updatedBiWeekly)
            if (updatedBiWeekly) {
                return res.status(200).json({
                    status: "success",
                    message: "BiWeekly Inspection Updated Successfully",
                    data: updatedBiWeekly
                })
            } else {
                return res.status(400).json({ message: 'Failed to update'})
            }
        } 
     catch (err) {
        return res.status(400).json({ message: err.message })
    }
};

//delete by biWeekly id
