
import PostTrip from '../models/posttripModel'
import {Request, Response } from 'express'

//for queries

export const view = async(req:Request, res:Response)=>{
    try{
    let allPostTrips = await PostTrip.find(req.body).sort({created_at:1}).exec()
    if(allPostTrips){
        return res.status(200).json({
            status: "success",
            message: "Working",
            data: allPostTrips
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

//For creating new posttrip
export const add = async function (req:Request, res:Response) {
    try {
        const posttrip = new PostTrip();
        posttrip.group_id = req.body.group_id;
        posttrip.owner_id = req.body.owner_id;
        posttrip.type = req.body.type;
        posttrip.truck_id = req.body.truck_id;
        posttrip.odometer_reading = req.body.odometer_reading;
        posttrip.fuel_level = req.body.fuel_level;
        posttrip.seat_belts = req.body.seat_belts;
        posttrip.pto_switch = req.body.pto_switch;
        posttrip.engine_fluids = req.body.engine_fluids;
        posttrip.transmission = req.body.transmission;
        posttrip.steering_mechanism = req.body.steering_mechanism;
        posttrip.horn = req.body.horn;
        posttrip.windshield_wipers = req.body.windshield_wipers;
        posttrip.mirrors = req.body.mirrors;
        posttrip.truck_lights = req.body.truck_lights;
        posttrip.parking_brake = req.body.parking_brake;
        posttrip.service_brake = req.body.service_brake;
        posttrip.tires = req.body.tires;
        posttrip.rims = req.body.rims;
        posttrip.emergency_equipment = req.body.emergency_equipment;
        posttrip.tools_gear = req.body.tools_gear;
        posttrip.chocks_chains = req.body.chocks_chains;
        posttrip.drum_cap = req.body.drum_cap;
        posttrip.grease_distribution = req.body.grease_distribution;
        posttrip.chain_tension = req.body.chain_tension;
        posttrip.machine_lights = req.body.machine_lights;
        posttrip.machine_hours = req.body.machine_hours;
        posttrip.vehicle_condition = req.body.vehicle_condition;
        posttrip.required_documents = req.body.required_documents;
        posttrip.engine_warning = req.body.engine_warning;
        posttrip.drivers_signature = req.body.drivers_signature;


        //Save and check error
        let newPostTrip = await posttrip.save()
        if (newPostTrip) {
            res.status(201).json({
                status: "success",
                
                message: "New post-trip inspection created!",
            })
        } else {
            res.json({ message:'Failed to create an post-trip inspection' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

//update posttrip by object id

export const update = async function(req:Request, res:Response) {
    try {
        const data = {...req.body}
        let updatedPostTrip = await PostTrip.findByIdAndUpdate(req.body._id, data,{new:true, useFindAndModify:false})

        console.log(updatedPostTrip)
            if (updatedPostTrip) {
                return res.status(200).json({
                    status: "success",
                    message: "Post-Trip Inspection Updated Successfully",
                    data: updatedPostTrip
                })
            } else {
                return res.status(400).json({ message: 'Failed to update'})
            }
        } 
     catch (err) {
        return res.status(400).json({ message: err.message })
    }
};

//delete by posttrip id




