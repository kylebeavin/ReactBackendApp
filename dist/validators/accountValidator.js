"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountValidatorUpdate = exports.accountValidatorPost = void 0;
var express_validator_1 = require("express-validator");
var accountValidatorPost = function () {
    //console.log(body)
    return [
        express_validator_1.body('account_name').exists().withMessage('Account name is required').notEmpty().withMessage('not valid name'),
        express_validator_1.body('owner_id').exists().withMessage('Owner id is required').notEmpty().withMessage('not valid owner id'),
        express_validator_1.body('owner_name').exists().withMessage('Owner name is required').notEmpty().withMessage('Not valid owner name'),
        express_validator_1.body('group_id').exists().notEmpty().withMessage('Group id is required'),
        express_validator_1.body('email').optional().isEmail().withMessage('Invalid Email')
    ];
};
exports.accountValidatorPost = accountValidatorPost;
var accountValidatorUpdate = function () {
    return [
        express_validator_1.body('account_name').optional().notEmpty().withMessage('Invalid account name'),
        express_validator_1.body('owner_id').optional().notEmpty().withMessage('Invalid owner id'),
        express_validator_1.body('owner_name').optional().notEmpty().withMessage('Invalid owner name'),
        express_validator_1.body('group_id').optional().notEmpty().withMessage('Valid group id is required'),
        express_validator_1.body('email').optional().isEmail().withMessage('Invalid Email')
    ];
};
exports.accountValidatorUpdate = accountValidatorUpdate;
