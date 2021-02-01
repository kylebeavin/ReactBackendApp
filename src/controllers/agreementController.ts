import {Request, Response, NextFunction } from 'express'
import { ParsedUrlQuery, ParsedUrlQueryInput } from 'querystring'
import Agreement from '../models/accountModel'

interface Results{
    next:Object
    previous:Object
}
async(req:Request, res:Response)=>{
    try{
  
    let allAgreements = await Agreement.find({}).sort({created_at:-1}).exec()
  
    
    if(allAgreements){
        return res.status(200).json({
            status: "success",
            message: "Working",
            data: allAgreements
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