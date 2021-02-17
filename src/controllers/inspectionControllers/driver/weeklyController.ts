
import Weekly from '../../../models/inspectionModels/driver/weeklyDriverModel'
import {Request, Response } from 'express'

//for queries

export const view = async(req:Request, res:Response)=>{
    try{
    let allWeeklys = await Weekly.find(req.body).sort({created_at:1}).exec()
    if(allWeeklys){
        return res.status(200).json({
            status: "success",
            message: "Working",
            data: allWeeklys
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

//For creating new weekly
export const add = async function (req:Request, res:Response) {
    try {
        const weekly = new Weekly();
        weekly.group_id = req.body.group_id;
        weekly.owner_id = req.body.owner_id;
        weekly.type = req.body.type;
        weekly.truck_id = req.body.truck_id;
        weekly.odometer_reading = req.body.odometer_reading;
        weekly.def_unit = req.body.def_unit;
        weekly.boom_arm = req.body.boom_arm;
        weekly.boom_drum = req.body.boom_drum;
        weekly.clean_cab = req.body.clean_cab;
        weekly.hydraulics = req.body.hydraulics;
        weekly.tools = req.body.tools;
        weekly.greased_rails = req.body.greased_rails;
        weekly.zirc_fittings = req.body.zirc_fittings;
        weekly.grease_system = req.body.grease_system;
        weekly.compressor = req.body.compressor;
        weekly.air_lines = req.body.air_lines;
        weekly.battery = req.body.battery;
        weekly.belts_hoses = req.body.belts_hoses;
        weekly.truck_body = req.body.truck_body;
        weekly.parking_brake = req.body.parking_brake;
        weekly.service_brake = req.body.service_brake;
        weekly.couplings = req.body.couplings;
        weekly.heater = req.body.heater;
        weekly.drive_line = req.body.drive_line;
        weekly.engine = req.body.engine;
        weekly.exhaust = req.body.exhaust;
        weekly.fluid_levels = req.body.fluid_levels;
        weekly.frame_assembly = req.body.frame_assembly;
        weekly.front_axle = req.body.front_axle;
        weekly.fuel_tank = req.body.fuel_tank;
        weekly.horn = req.body.horn;
        weekly.lights_head = req.body.lights_head;
        weekly.lights_tail = req.body.lights_tail;
        weekly.lights_turn = req.body.lights_turn;
        weekly.lights_clearance = req.body.lights_clearance;
        weekly.mirrors = req.body.mirrors;
        weekly.muffler = req.body.muffler;
        weekly.oil_pressure = req.body.oil_pressure;
        weekly.radiator = req.body.radiator;
        weekly.rear_end = req.body.rear_end;
        weekly.reflectors = req.body.reflectors;
        weekly.starter = req.body.starter;
        weekly.steering = req.body.steering;
        weekly.suspension = req.body.suspension;
        weekly.tires = req.body.tires;
        weekly.transmission = req.body.transmission;
        weekly.trip_recorder = req.body.trip_recorder;
        weekly.rims = req.body.rims;
        weekly.windows = req.body.windows;
        weekly.windshield_wipers = req.body.windshield_wipers;
        weekly.extinguisher = req.body.extinguisher;
        weekly.flags = req.body.flags;
        weekly.reflectives = req.body.reflectives;
        weekly.spare_bulbs = req.body.spare_bulbs;
        weekly.remarks = req.body.remarks;
        weekly.vehicle_condition = req.body.vehicle_condition;
        weekly.defects_corrected = req.body.defects_corrected;
        weekly.drivers_signature = req.body.drivers_signature;
        
        //Save and check error
        let newWeekly = await weekly.save()
        if (newWeekly) {
            res.status(201).json({
                status: "success",
                
                message: "New weekly inspection created!",
            })
        } else {
            res.json({ message:'Failed to create weekly inspection' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

//update weekly by object id

export const update = async function(req:Request, res:Response) {
    try {
        const data = {...req.body}
        let updatedWeekly = await Weekly.findByIdAndUpdate(req.body._id, data,{new:true, useFindAndModify:false})

        console.log(updatedWeekly)
            if (updatedWeekly) {
                return res.status(200).json({
                    status: "success",
                    message: "Weekly Inspection Updated Successfully",
                    data: updatedWeekly
                })
            } else {
                return res.status(400).json({ message: 'Failed to update'})
            }
        } 
     catch (err) {
        return res.status(400).json({ message: err.message })
    }
};

//delete by weekly id
