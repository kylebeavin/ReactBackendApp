import {Request, Response, NextFunction } from 'express'
import Meeting from '../models/meetingModel'
import {validationResult} from 'express-validator'
//for queries

export const view = async(req:Request, res:Response)=>{
    try{
    let allMeetings = await Meeting.find(req.body).sort({created_at:1}).exec()
    if(allMeetings){
        return res.status(200).json({
            status: "success",
            message: "Working",
            data: allMeetings

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

//for creating new account
export const add = async function (req:Request, res:Response) {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        const meeting = new Meeting();
        meeting.account_id = req.body.account_id // String, required
        meeting.address_city = req.body.address_city;
        meeting.address_state = req.body.address_state;
        meeting.address_street = req.body.address_street;
        meeting.address_zip = req.body.address_zip;
        meeting.contact_id = req.body.contact_id;
        meeting.group_id = req.body.group_id // String, required
        meeting.is_active = true;
        meeting.meeting_time = req.body.meeting_time;
        meeting.owner_id = req.body.owner_id;
        meeting.title = req.body.title;

        //Save and check error
        let newMeeting = await meeting.save()
        if (newMeeting) {
            res.status(201).json({
                status: "success",
                message: "New meeting created!",
            })
        } else {
            res.json({ status: 'Failed to create meeting' })
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
            return res.status(400).json({errors:errors.array()})
        }
        const data = {...req.body}
        let updatedAgreement = await Meeting.findByIdAndUpdate(req.body._id, data,{new:true, useFindAndModify:false,runValidators:true})

        console.log(updatedAgreement)
            if (updatedAgreement) {
                return res.status(200).json({
                    status: "success",
                    message: "Meeting Updated Successfully",
                    data: updatedAgreement
                })
            } else {
                return res.status(400).json({ message: 'Failed to update', status: 400 })
            }
        } 
     catch (err) {
        return res.status(400).json({ message: err.message })
    }
};

//






