import {Request, Response, NextFunction } from 'express'
import Order from '../models/orderModel'

//for queries

export const view = async(req:Request, res:Response)=>{
    try{
    let allOrders = await Order.find(req.body).sort({created_at:1}).exec()
    if(allOrders){
        return res.status(200).json({
            status: "success",
            message: "Working",
            data: allOrders
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

//For creating new order
export const add = async function (req:Request, res:Response) {
    try {
        const order = new Order();
        order.account_id = req.body.account_id;
        order.agreement_id = req.body.agreement_id;
        order.demand_rate = req.body.demand_rate;
        order.end_date = req.body.end_date;
        order.group_id = req.body.group_id;
        order.is_demo = req.body.is_demo;
        order.is_recurring = req.body.is_recurring;
        order.monthly_rate = req.body.monthly_rate;
        order.notes = req.body.notes;
        order.services = req.body.services;
        order.service_days = req.body.service_days;
        order.service_frequency = req.body.service_frequency;
        order.service_per = req.body.service_per;
        order.start_date = req.body.start_date;
        order.term_date = req.body.term_date;
        order.url = req.body.url;
        //Save and check error
        let newOrder = await order.save()
        if (newOrder) {
            res.status(201).json({
                status: "success",
                
                message: "New order created!",
            })
        } else {
            res.json({ message:'Failed to create an order' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

//update order by object id

export const update = async function(req:Request, res:Response) {
    try {
        const data = {...req.body}
        let updatedOrder = await Order.findByIdAndUpdate(req.body._id, data,{new:true, useFindAndModify:false})

        console.log(updatedOrder)
            if (updatedOrder) {
                return res.status(200).json({
                    status: "success",
                    message: "Account Updated Successfully",
                    data: updatedOrder
                })
            } else {
                return res.status(400).json({ message: 'Failed to update'})
            }
        } 
     catch (err) {
        return res.status(400).json({ message: err.message })
    }
};

//delete by order id


