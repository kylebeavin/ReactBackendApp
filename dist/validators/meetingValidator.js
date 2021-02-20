"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meetingValidatorUpdate = exports.meetingValidatorPost = void 0;
var express_validator_1 = require("express-validator");
var meetingValidatorPost = function () {
    //console.log(body)
    return [
        express_validator_1.body('account_id').exists().notEmpty().withMessage('Account id is required'),
        express_validator_1.body('address_city').exists().notEmpty().withMessage('Address city is required'),
        express_validator_1.body('address_street').exists().notEmpty().withMessage('Address street is required'),
        express_validator_1.body('address_state').exists().notEmpty().withMessage('Address state is required'),
        express_validator_1.body('address_zip').exists().notEmpty().withMessage('Zipcode is required'),
        express_validator_1.body('contact_id').exists().notEmpty().withMessage('Contact id is required'),
        express_validator_1.body('group_id').exists().notEmpty().withMessage('Group id is required'),
        express_validator_1.body('meeting_time').exists().isDate().withMessage('Meeting time is required'),
        express_validator_1.body('owner_id').exists().notEmpty().withMessage('Owner id is required'),
        express_validator_1.body('title').exists().notEmpty().withMessage('Title is required')
    ];
};
exports.meetingValidatorPost = meetingValidatorPost;
var meetingValidatorUpdate = function () {
    return [
        express_validator_1.body('account_id').optional().notEmpty().withMessage('Account id is required'),
        express_validator_1.body('address_city').optional().notEmpty().withMessage('Address city is required'),
        express_validator_1.body('address_street').optional().notEmpty().withMessage('Address street is required'),
        express_validator_1.body('address_state').optional().notEmpty().withMessage('Address state is required'),
        express_validator_1.body('address_zip').optional().notEmpty().withMessage('Zipcode is required'),
        express_validator_1.body('contact_id').optional().notEmpty().withMessage('Contact id is required'),
        express_validator_1.body('group_id').optional().notEmpty().withMessage('Group id is required'),
        express_validator_1.body('meeting_time').optional().isDate().withMessage('Meeting time is required'),
        express_validator_1.body('owner_id').optional().notEmpty().withMessage('Owner id is required'),
        express_validator_1.body('title').optional().notEmpty().withMessage('Title is required')
    ];
};
exports.meetingValidatorUpdate = meetingValidatorUpdate;
