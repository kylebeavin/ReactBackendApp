import expressValidator from 'express-validator'
import {body } from 'express-validator'

export const groupValidatorPost = ()=>{
    //console.log(body)
    return [
       body('address_city').exists().notEmpty().withMessage('Address city is required'),
       body('address_street').exists().notEmpty().withMessage('Address street is required'),
       body('address_state').exists().notEmpty().withMessage('Address state is required'),
       body('address_zip').exists().notEmpty().withMessage('Zipcode is required'),
       body('dba').exists().notEmpty().withMessage('Dba is required'),
       body('ein').exists().notEmpty().withMessage('Ein is required'),
       body('email').exists().isEmail().withMessage('Email is required'),
       body('launch_date').exists().isDate().withMessage('Launch date is required'),
       body('legal_company').exists().notEmpty().withMessage('Legal company is required'),
       body('name').exists().notEmpty().withMessage('Name is required'),
      // body('phone').exists().withMessage('Phone number is required'),
       body('region').exists().notEmpty().withMessage('Region is required'),
       body('signing_date').exists().isDate().withMessage('Signing date is required'),
       body('tax_rate').exists().notEmpty().withMessage('Tax rate is required'),
       body('territory_zips').exists().notEmpty().withMessage('Territory zips is required'),
       body('time_zone').exists().notEmpty().withMessage('Time zone is required'),
       body('webpage').exists().isURL().withMessage('Webpage is required'),
       body('phone').exists().custom(value =>{
        if(!value.match(/^[2-9]\d{2}-?\d{3}-?\d{4}$/)){
           throw new Error('Valid phone number required')
        }
        return true
    })
    ]
}

export const groupValidatorUpdate = ()=>{
    return [
        body('address_city').optional().notEmpty().withMessage('Address city is required'),
        body('address_street').optional().notEmpty().withMessage('Address street is required'),
        body('address_state').optional().notEmpty().withMessage('Address state is required'),
        body('address_zip').optional().notEmpty().withMessage('Zipcode is required'),
        body('dba').optional().notEmpty().withMessage('Dba is required'),
        body('ein').optional().notEmpty().withMessage('Ein is required'),
        body('email').optional().isEmail().withMessage('Email is required'),
        body('launch_date').optional().isDate().withMessage('Launch date is required'),
        body('legal_company').optional().notEmpty().withMessage('Legal company is required'),
        body('name').optional().notEmpty().withMessage('Name is required'),
       // body('phone').exists().withMessage('Phone number is required'),
        body('region').optional().notEmpty().withMessage('Region is required'),
        body('signing_date').optional().isDate().withMessage('Signing date is required'),
        body('tax_rate').optional().notEmpty().withMessage('Tax rate is required'),
        body('territory_zips').optional().notEmpty().withMessage('Territory zips is required'),
        body('time_zone').optional().notEmpty().withMessage('Time zone is required'),
        body('webpage').optional().isURL().withMessage('Webpage is required'),
        body('phone').optional().custom(value =>{
         if(!value.match(/^[2-9]\d{2}-?\d{3}-?\d{4}$/)){
            throw new Error('Valid phone number required')
         }
         return true
     })
     ]
}