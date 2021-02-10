import expressValidator from 'express-validator'
import {body } from 'express-validator'

export const contactValidatorPost = ()=>{
   
    return [
       body('account_id').exists().notEmpty().withMessage('Account id is required'),
       body('email').exists().isEmail().withMessage('Email is required'),
       body('first_name').exists().notEmpty().withMessage('First name is required'),
       body('last_name').exists().notEmpty().withMessage('Last name is required'),
       body('method').exists().isIn(['email','sms']).withMessage('Valid method is required'),
       body('owner_id').exists().notEmpty().withMessage('Owner id is required'),
       body('phone').exists().isMobilePhone('any').withMessage('Phone number is required'),
       body('type').exists().isIn(['bill','smash','haul']).withMessage('Valid type is required'),
       body('phone').optional().custom(value =>{
        if(!value.match(/^[2-9]\d{2}-?\d{3}-?\d{4}$/)){
           throw new Error('Valid phone number required')
        }
        return true
    })
    ]
}

export const contactValidatorUpdate = ()=>{
    return [
        body('account_id').optional().notEmpty().withMessage('Account id is required'),
        body('email').optional().isEmail().withMessage('Email is required'),
        body('first_name').optional().notEmpty().withMessage('First name is required'),
        body('last_name').optional().notEmpty().withMessage('Last name is required'),
        body('method').optional().isIn(['email','sms']).withMessage('Valid method is required'),
        body('owner_id').optional().notEmpty().withMessage('Owner id is required'),
        body('type').optional().isIn(['bill','smash','haul']).withMessage('Valid type is required'),
        body('phone').optional().custom(value =>{
            if(!value.match(/^[2-9]\d{2}-?\d{3}-?\d{4}$/)){
               throw new Error('Valid phone number required')
            }
            return true
        })
     ]
}