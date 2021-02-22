import {Request, Response, NextFunction } from 'express'
import Truck from '../models/truckModel'

//for queries

export const view = async(req:Request, res:Response)=>{
    try{
    let allTrucks= await Truck.find(req.body).sort({created_at:1}).exec()
    if(allTrucks){
        return res.status(200).json({
            status: 200,
            message: "Working",
            data: allTrucks
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

//for creating new account
export const add = async function (req:Request, res:Response) {
    try {
        var truck = new Truck();
        truck.body_subtype = req.body.body_subtype;
        truck.body_type = req.body.body_type;
        truck.color = req.body.color;
        truck.documents = req.body.documents;
        truck.group_id = req.body.group_id;
        truck.hours = req.body.hours != null ? req.body.hours : null;
        truck.is_active = req.body.is_active;
        truck.license_number = req.body.license_number;
        truck.msrp = req.body.msrp;
        truck.name = req.body.name;
        truck.odo = req.body.odo != null ? req.body.odo : null;
        truck.operator = req.body.operator;
        truck.ownership = req.body.ownership;
        truck.pictures = req.body.pictures;
        truck.service_history = req.body.service_history;
        truck.service_status = req.body.service_status;
        truck.trim = req.body.trim;
        truck.registration = req.body.registration;
        truck.vehicle_make = req.body.vehicle_make;
        truck.vehicle_model = req.body.vehicle_model;
        truck.vehicle_type = req.body.vehicle_type;
        truck.vin = req.body.vin;
        truck.year = req.body.year;

        //Save and check error
        let newTruck = await truck.save()
        if (newTruck) {
            res.status(201).json({
                status: 201,
                message: "New truck created!",
            })
        } else {
            res.json({ status: 'Failed to create agreement' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
        

};

//update Agreement by objectid

export const update = async function(req:Request, res:Response) {
    try {
        const data = {...req.body}
        let updatedTruck = await Truck.findByIdAndUpdate(req.body._id, data,{new:true, useFindAndModify:false})

        console.log(updatedTruck)
            if (updatedTruck) {
                return res.status(200).json({
                    status: 200,
                    message: "Account Updated Successfully",
                    data: updatedTruck
                })
            } else {
                return res.status(400).json({ message: 'Failed to update', status: 400 })
            }
        } 
     catch (err) {
        return res.status(400).json({status: 400, message: err.message })
    }
};

//






