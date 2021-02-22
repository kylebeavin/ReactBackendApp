import {NextFunction, Request, Response} from 'express'
import Group from '../models/groupModel'
import {validationResult} from 'express-validator'
//for queries
export const view = async(req:Request, res:Response)=>{
    try{
    let allGroups = await Group.find(req.body).exec()
    if(allGroups){
        return res.status(200).json({
            status: 200,
            message: "Working",
            data: allGroups
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

//For creating new group
export const add = async function (req:Request, res:Response) {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({status: 400, errors:errors.array()})
        }
        var group = new Group();
        group.address.address_city = req.body.address_city;
        group.address.address_state = req.body.address_state;
        group.address.address_street = req.body.address_street;
        group.address.address_zip = req.body.address_zip;
        group.dba = req.body.dba;
        group.ein = req.body.ein;
        group.email = req.body.email;
        group.is_active = req.body.is_active;
        group.launch_date = req.body.launch_date;
        group.legal_company = req.body.legal_company;
        group.name = req.body.name;
        group.phone = req.body.phone;
        group.region = req.body.region;
        group.signing_date = req.body.signing_date;
        group.tax_rate = req.body.tax_rate;
        group.territory_zips = req.body.territory_zips;
        group.time_zone = req.body.time_zone;
        group.webpage = req.body.webpage != null ? req.body.webpage : null;
        
        //Save and check error
        let newGroup = await group.save()
        if (newGroup) {
            res.status(201).json({
                status: "201",
                
                message: "New group created!",
            })
        } else {
            res.json({ message: 'Failed to create group ' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

//update group by object id
export const update = async function(req:Request, res:Response) {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({status: 400, errors:errors.array()})
        }
        const data = {...req.body}
        let updatedGroup = await Group.findByIdAndUpdate(req.body._id, data,{new:true, useFindAndModify:false})

        
            if (updatedGroup) {
                res.status(200).json({
                    status: 200,
                    message: "Group Updated Successfully",
                    data: updatedGroup
                })
            } else {
                res.status(400).json({ message: 'Failed to update', status: 400 })
            }
        } 
     catch (err) {
        res.status(400).json({status: 400, message: err.message })
    }
};

// Delete Group by _id
// export const remove = async function (req:Request, res:Response) {
//     let group = await Group.findOne({ _id: req.body._id }).exec()
//     if (group) {
       
//         group.address_city = group.address_city;
//         group.address_state = group.address_state;
//         group.address_street = group.address_street;
//         group.address_zip = group.address_zip;
//         group.dba = group.dba;
//         group.ein = group.ein;
//         group.email = group.email;
//         group.is_active = false;
//         group.launch_date = group.launch_date;
//         group.legal_company = group.legal_company;
//         group.name = group.name;
//         group.phone = group.phone;
//         group.region = group.region;
//         group.signing_date = group.signing_date
//         group.tax_rate = group.tax_rate;
//         group.territory_zips = group.territory_zips;
//         group.time_zone = group.time_zone;
//         group.webpage = group.webpage;
//         if (group) {
//             res.status(200).json({
//                 status: "success",
                
//                 message: "Group deactivated Successfully",
//                 data: group
//             })
//         }
//     } else {
//         res.json({ message: 'Group not found' })
//     }
   
// };



