import expressValidator from 'express-validator'
import {body } from 'express-validator'

export const agreementValidatorPost = ()=>{
    //console.log(body)
    return [
       body('account_id').exists().notEmpty().withMessage('Account id is required'),
       body('demand_rate').exists().notEmpty().withMessage('Demand rate is required'),
       body('end_date').exists().notEmpty().withMessage('End date required'),
       body('group_id').exists().notEmpty().withMessage('Group id is required'),
       body('monthly_rate').exists().notEmpty().withMessage('Monthly rate is required'),
       body('owner_id').exists().notEmpty().withMessage('Owner id is required'),
       body('is_recurring').exists().notEmpty().withMessage('Recurring field is required'),
       body('services').exists().notEmpty().withMessage('Services is required'),
       body('service_days').exists().notEmpty().withMessage('Service days is required'),
       body('service_per').exists().notEmpty().withMessage('Service per field is required'),
       body('start_date').exists().notEmpty().withMessage('Start date is required'),
       body('service_frequency').exists().notEmpty().withMessage('Service frequency is required'),
       body('term_date').exists().notEmpty().withMessage('Term date is required'),
       body('end_date').custom((value, {req})=>{
             if(new Date(value)< new Date(req.body.start_date)){
                 throw new Error('End date should be after start date')
             }
             return true
       }),
       body('service_days').custom(value=>{
          if(!['sun','mon','tue','wed','thu','fri','sat'].includes(value)){
              throw new Error('Choose a valid day of the week')
          }
          return true
       }),
       body('service_per').custom(value=>{
          if(!['day', 'week', 'month'].includes(value)){
              throw new Error('Choose a valid option  of day, week or month')
          }
          return true
       }),
      
    ]
}

export const accountValidatorUpdate = ()=>{
    return [
        body('account_name').optional().notEmpty().withMessage('Invalid account name'),
        body('owner_id').optional().notEmpty().withMessage('Invalid owner id'),
        body('owner_name').optional().notEmpty().withMessage('Invalid owner name'),
        body('email').optional().isEmail().withMessage('Invalid Email')
     ]
}