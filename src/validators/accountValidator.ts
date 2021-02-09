import expressValidator from 'express-validator'
import {body } from 'express-validator'

export const accountValidator = ()=>{
    return [
        body('email', 'Invalid email').exists().isEmail(),
        body('conversion', 'Invalid Date').isDate()
    ]
}