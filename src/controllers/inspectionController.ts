import {NextFunction, Request, Response} from 'express'
import Inspection from '../models/inspectionModel'

//for queries
export const view = async(req:Request, res:Response)=>{
    try{
    let allInspections = await Inspection.find(req.body).sort({account_name:1}).exec()
    if( allInspections){
        return res.status(200).json({
            status: "success",
            message: "Working",
            data: allInspections
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

//For creating new inspection
export const add = async function(req:Request, res:Response) {
    try {
        var inspection = new Inspection();
        inspection.group_id = req.body.group_id;
        inspection.is_active = req.body.is_active
        inspection.owner_id = req.body.owner_id;
        inspection.truck_id = req.body.truck_id;
        inspection.type = req.body.type;


        //Save and check error
        let newInspection = await inspection.save()
        if (newInspection) {
            res.status(201).json({
                status: "success",
              
                message: "New inspection created!",
            })
        } else {
            res.status(304).json({ status: 'Failed to create inspection' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};


    // Update Account by Object Id
    export const update = async function(req:Request, res:Response) {
        try {
            const data = {...req.body}
            let updatedInspection = await Inspection.findByIdAndUpdate(req.body._id, data)
    
            
                if (updatedInspection) {
                    res.status(204).json({
                        status: "success",
                        message: "Account Updated Successfully",
                        data:(updatedInspection)
                    })
                } else {
                    res.status(400).json({ message: 'Failed to update', status: 400 })
                }
            } 
         catch (err) {
            res.status(400).json({ message: err.message })
        }
    };

    //add delete functionality TODO