import expressValidator from 'express-validator'
import {body } from 'express-validator'

export const orderValidatorPost = ()=>{
    //console.log(body)
    return [
       body('account_id').exists().notEmpty().withMessage('Account id is required'),
       body('demand_rate').exists().notEmpty().withMessage('Demand rate is required'),
       body('end_date').exists().isDate().withMessage('End date required'),
       body('group_id').exists().notEmpty().withMessage('Group id is required'),
       body('monthly_rate').exists().notEmpty().withMessage('Monthly rate is required'),
       body('owner_id').exists().notEmpty().withMessage('Owner id is required'),
       //body('is_recurring').exists().notEmpty().withMessage('Recurring field is required'),
       //body('services').exists().notEmpty().withMessage('Services is required'),
       body('service_days').exists().isIn(['sun','mon','tue','wed','thu','fri','sat']).withMessage('Choose a valid service day of the week'),
       body('service_per').exists().isIn(['day', 'week', 'month']).withMessage('Service per field is required'),
       body('start_date').isDate().withMessage('Start date is required'),
       body('service_frequency').exists().notEmpty().withMessage('Service frequency is required'),
       body('term_date').exists().notEmpty().withMessage('Term date is required'),
       body('notes').exists().notEmpty().withMessage('Notes is required'),
       body('url').exists().isURL().withMessage('url is required'),
       body('end_date').custom((value, {req})=>{
             if(new Date(value)< new Date(req.body.start_date)){
                 throw new Error('End date should be after start date')
             }
             return true
       }),
    //    body('service_days').custom(value=>{
    //       if(!['sun','mon','tue','wed','thu','fri','sat'].includes(value)){
    //           throw new Error('Choose a valid day of the week')
    //       }
    //       return true
    //    }),
    //    body('service_per').custom(value=>{
    //       if(!['day', 'week', 'month'].includes(value)){
    //           throw new Error('Choose a valid option  of day, week or month')
    //       }
    //       return true
    //    }),
      
    ]
}

export const orderValidatorUpdate = ()=>{
    return [
        body('account_id').optional().notEmpty().withMessage('Valid Account id is required'),
        body('demand_rate').optional().notEmpty().withMessage('Valid Demand rate is required'),
        body('end_date').optional().isDate().withMessage('Valid End date required'),
        body('group_id').optional().notEmpty().withMessage('Valid Group id is required'),
        body('monthly_rate').optional().notEmpty().withMessage('Valid Monthly rate is required'),
        body('owner_id').optional().notEmpty().withMessage('Valid Owner id is required'),
        //body('is_recurring').optional().notEmpty().withMessage('Valid Recurring field is required'),
        //body('services').optional().notEmpty().withMessage('Valid Services is required'),
        body('service_days').optional().isIn(['sun','mon','tue','wed','thu','fri','sat']).withMessage('Valid Service days is required'),
        body('service_per').optional().isIn(['day', 'week', 'month']).withMessage('Valid Service per field is required'),
        body('start_date').optional().isDate().withMessage('Valid Start date is required'),
        body('service_frequency').optional().notEmpty().withMessage('Valid Service frequency is required'),
        body('term_date').optional().notEmpty().withMessage('Valid Term date is required'),
        body('notes').optional().notEmpty().withMessage('Notes is required'),
        body('url').optional().isURL().withMessage('url is required'),
        body('end_date').optional().custom((value, {req})=>{
              if(new Date(value)< new Date(req.body.start_date)){
                  throw new Error('End date should be after start date')
              }
              return true
        }),
        // body('service_days').optional().custom(value=>{
        //    if(!['sun','mon','tue','wed','thu','fri','sat'].includes(value)){
        //        throw new Error('Choose a valid day of the week')
        //    }
        //    return true
        // }),
        // body('service_per').optional().custom(value=>{
        //    if(!['day', 'week', 'month'].includes(value)){
        //        throw new Error('Choose a valid option  of day, week or month')
        //    }
        //    return true
        // }),
       
        
     ]
}