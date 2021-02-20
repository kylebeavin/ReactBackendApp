import expressValidator from 'express-validator'
import {body } from 'express-validator'

export const meetingValidatorPost = ()=>{
    //console.log(body)
    return [
       body('account_id').exists().notEmpty().withMessage('Account id is required'),
       body('address_city').exists().notEmpty().withMessage('Address city is required'),
       body('address_street').exists().notEmpty().withMessage('Address street is required'),
       body('address_state').exists().notEmpty().withMessage('Address state is required'),
       body('address_zip').exists().notEmpty().withMessage('Zipcode is required'),
       body('contact_id').exists().notEmpty().withMessage('Contact id is required'),
       body('group_id').exists().notEmpty().withMessage('Group id is required'),
       body('meeting_time').exists().isDate().withMessage('Meeting time is required'),
       body('owner_id').exists().notEmpty().withMessage('Owner id is required'),
       body('title').exists().notEmpty().withMessage('Title is required')
    ]
}

export const meetingValidatorUpdate = ()=>{
    return [
        body('account_id').optional().notEmpty().withMessage('Account id is required'),
       body('address_city').optional().notEmpty().withMessage('Address city is required'),
       body('address_street').optional().notEmpty().withMessage('Address street is required'),
       body('address_state').optional().notEmpty().withMessage('Address state is required'),
       body('address_zip').optional().notEmpty().withMessage('Zipcode is required'),
       body('contact_id').optional().notEmpty().withMessage('Contact id is required'),
       body('group_id').optional().notEmpty().withMessage('Group id is required'),
       body('meeting_time').optional().isDate().withMessage('Meeting time is required'),
       body('owner_id').optional().notEmpty().withMessage('Owner id is required'),
       body('title').optional().notEmpty().withMessage('Title is required')
       
       
        
     ]
}