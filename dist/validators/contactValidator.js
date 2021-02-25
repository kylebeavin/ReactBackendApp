"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactValidatorUpdate = exports.contactValidatorPost = void 0;
var express_validator_1 = require("express-validator");
var contactValidatorPost = function () {
    return [
        express_validator_1.body('account_id').exists().notEmpty().withMessage('Account id is required'),
        express_validator_1.body('email').exists().isEmail().withMessage('Email is required'),
        express_validator_1.body('first_name').exists().notEmpty().withMessage('First name is required'),
        express_validator_1.body('last_name').exists().notEmpty().withMessage('Last name is required'),
        express_validator_1.body('method').exists().isIn(['email', 'sms']).withMessage('Valid method is required'),
        express_validator_1.body('owner_id').exists().notEmpty().withMessage('Owner id is required'),
        express_validator_1.body('phone').exists().withMessage('Phone number is required'),
        express_validator_1.body('type').exists().isIn(['bill', 'smash', 'haul']).withMessage('Valid type is required'),
        express_validator_1.body('phone').optional().custom(function (value) {
            if (!value.match(/^[2-9]\d{2}-?\d{3}-?\d{4}$/)) {
                throw new Error('Valid phone number required');
            }
            return true;
        })
    ];
};
exports.contactValidatorPost = contactValidatorPost;
var contactValidatorUpdate = function () {
    return [
        express_validator_1.body('account_id').optional().notEmpty().withMessage('Account id is required'),
        express_validator_1.body('email').optional().isEmail().withMessage('Email is required'),
        express_validator_1.body('first_name').optional().notEmpty().withMessage('First name is required'),
        express_validator_1.body('last_name').optional().notEmpty().withMessage('Last name is required'),
        express_validator_1.body('method').optional().isIn(['email', 'sms']).withMessage('Valid method is required'),
        express_validator_1.body('owner_id').optional().notEmpty().withMessage('Owner id is required'),
        express_validator_1.body('type').optional().isIn(['bill', 'smash', 'haul']).withMessage('Valid type is required'),
        express_validator_1.body('phone').optional().custom(function (value) {
            if (!value.match(/^[2-9]\d{2}-?\d{3}-?\d{4}$/)) {
                throw new Error('Valid phone number required');
            }
            return true;
        })
    ];
};
exports.contactValidatorUpdate = contactValidatorUpdate;
