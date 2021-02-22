import {Request, Response, NextFunction } from 'express'
import Agreement from '../models/agreementModel'
import {validationResult} from 'express-validator'
//for queries

export const view = async(req:Request, res:Response)=>{
    try{
    let allAgreements = await Agreement.find(req.body).sort({created_at:1}).exec()
    if(allAgreements){
        return res.status(200).json({
            status: 200,
            message: "Working",
            data: allAgreements
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
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({status: 400, errors:errors.array()})
        }
        const agreement = new Agreement();
        agreement.account_id = req.body.account_id;
        agreement.demand_rate = req.body.demand_rate;
        agreement.end_date = req.body.end_date;
        agreement.group_id = req.body.group_id;
        agreement.is_active = req.body.is_active;
        agreement.monthly_rate = req.body.monthly_rate;
        agreement.notes = req.body.notes != null ? req.body.notes : null
        agreement.owner_id = req.body.owner_id;
        agreement.is_recurring = req.body.is_recurring;
        agreement.services = req.body.services;
        agreement.service_days = req.body.service_days;
        agreement.service_frequency = req.body.service_frequency;
        agreement.service_per = req.body.service_per;
        agreement.start_date = req.body.start_date;
        agreement.term_date = req.body.term_date;
        agreement.url = req.body.url != null ? req.body.url : null

        //Save and check error
        let newAgreement = await agreement.save()
        if (newAgreement) {
            res.status(201).json({
                status: "201",
                message: "New agreement created!",
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
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({status: 400, errors:errors.array()})
        }
        const data = {...req.body}
        let updatedAgreement = await Agreement.findByIdAndUpdate(req.body._id, data,{new:true, useFindAndModify:false,runValidators:true})

        console.log(updatedAgreement)
            if (updatedAgreement) {
                return res.status(200).json({
                    status: 200,
                    message: "Account Updated Successfully",
                    data: updatedAgreement
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






