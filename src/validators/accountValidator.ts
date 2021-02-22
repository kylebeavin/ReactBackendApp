import expressValidator from 'express-validator'
import {body } from 'express-validator'

export const accountValidatorPost = ()=>{
    //console.log(body)
    return [
       body('account_name').exists().withMessage('Account name is required').notEmpty().withMessage('not valid name'),
       body('owner_id').exists().withMessage('Owner id is required').notEmpty().withMessage('not valid owner id'),
       body('owner_name').exists().withMessage('Owner name is required').notEmpty().withMessage('Not valid owner name'),
       body('group_id').exists().notEmpty().withMessage('Group id is required'),
       body('email').optional().isEmail().withMessage('Invalid Email')
    ]
}

export const accountValidatorUpdate = ()=>{
    return [
        body('account_name').optional().notEmpty().withMessage('Invalid account name'),
        body('owner_id').optional().notEmpty().withMessage('Invalid owner id'),
        body('owner_name').optional().notEmpty().withMessage('Invalid owner name'),
        body('group_id').optional().notEmpty().withMessage('Valid group id is required'),
        body('email').optional().isEmail().withMessage('Invalid Email')
     ]
}