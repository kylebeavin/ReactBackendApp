
import Route from '../models/routeModel'
import {Request, Response } from 'express'

//for queries

export const view = async(req:Request, res:Response)=>{
    try{
    let allRoutes = await Route.find(req.body).sort({created_at:1}).exec()
    if(allRoutes){
        return res.status(200).json({
            status: 200,
            message: "Working",
            data: allRoutes
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

//For creating new route
export const add = async function (req:Request, res:Response) {
    try {
        const route = new Route();
        route.group_id = req.body.group_id;
        route.truck_id = req.body.truck_id;
        route.start_location = req.body.start_location;
        route.driver = req.body.driver;
        route.truck_vin = req.body.truck_vin;
        route.service_stop = req.body.service_stop;
        route.time = req.body.time;
        route.notes = req.body.notes;

        //Save and check error
        let newRoute = await route.save()
        if (newRoute) {
            res.status(201).json({
                status: 201,
                
                message: "New route created!",
            })
        } else {
            res.json({ message:'Failed to create route' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

//update route by object id

export const update = async function(req:Request, res:Response) {
    try {
        const data = {...req.body}
        let updatedRoute = await Route.findByIdAndUpdate(req.body._id, data,{new:true, useFindAndModify:false})

        console.log(updatedRoute)
            if (updatedRoute) {
                return res.status(200).json({
                    status: 200,
                    message: "Route Updated Successfully",
                    data: updatedRoute
                })
            } else {
                return res.status(400).json({ message: 'Failed to update'})
            }
        } 
     catch (err) {
        return res.status(400).json({status: 400, message: err.message })
    }
};

//delete by route id




