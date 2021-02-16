
import PreTrip from '../models/inspectionModels/pretripModel'
import {Request, Response } from 'express'

//for queries

export const view = async(req:Request, res:Response)=>{
    try{
    let allPreTrips = await PreTrip.find(req.body).sort({created_at:1}).exec()
    if(allPreTrips){
        return res.status(200).json({
            status: "success",
            message: "Working",
            data: allPreTrips
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

//For creating new pretrip
export const add = async function (req:Request, res:Response) {
    try {
        const pretrip = new PreTrip();
        pretrip.group_id = req.body.group_id;
        pretrip.owner_id = req.body.owner_id;
        pretrip.type = req.body.type;
        pretrip.truck_id = req.body.truck_id;
        pretrip.odometer_reading = req.body.odometer_reading;
        pretrip.fuel_level = req.body.fuel_level;
        pretrip.seat_belts = req.body.seat_belts;
        pretrip.pto_switch = req.body.pto_switch;
        pretrip.engine_fluids = req.body.engine_fluids;
        pretrip.transmission = req.body.transmission;
        pretrip.steering_mechanism = req.body.steering_mechanism;
        pretrip.horn = req.body.horn;
        pretrip.windshield_wipers = req.body.windshield_wipers;
        pretrip.mirrors = req.body.mirrors;
        pretrip.truck_lights = req.body.truck_lights;
        pretrip.parking_brake = req.body.parking_brake;
        pretrip.service_brake = req.body.service_brake;
        pretrip.tires = req.body.tires;
        pretrip.rims = req.body.rims;
        pretrip.emergency_equipment = req.body.emergency_equipment;
        pretrip.tools_gear = req.body.tools_gear;
        pretrip.chocks_chains = req.body.chocks_chains;
        pretrip.drum_cap = req.body.drum_cap;
        pretrip.grease_distribution = req.body.grease_distribution;
        pretrip.chain_tension = req.body.chain_tension;
        pretrip.machine_lights = req.body.machine_lights;
        pretrip.machine_hours = req.body.machine_hours;
        pretrip.vehicle_condition = req.body.vehicle_condition;
        pretrip.required_documents = req.body.required_documents;
        pretrip.engine_warning = req.body.engine_warning;
        pretrip.drivers_signature = req.body.drivers_signature;


        //Save and check error
        let newPreTrip = await pretrip.save()
        if (newPreTrip) {
            res.status(201).json({
                status: "success",
                
                message: "New pretrip inspection created!",
            })
        } else {
            res.json({ message:'Failed to create an pretrip inspection' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

//update pretrip by object id

export const update = async function(req:Request, res:Response) {
    try {
        const data = {...req.body}
        let updatedPreTrip = await PreTrip.findByIdAndUpdate(req.body._id, data,{new:true, useFindAndModify:false})

        console.log(updatedPreTrip)
            if (updatedPreTrip) {
                return res.status(200).json({
                    status: "success",
                    message: "Pre-Trip Inspection Updated Successfully",
                    data: updatedPreTrip
                })
            } else {
                return res.status(400).json({ message: 'Failed to update'})
            }
        } 
     catch (err) {
        return res.status(400).json({ message: err.message })
    }
};

//delete by pretrip id




