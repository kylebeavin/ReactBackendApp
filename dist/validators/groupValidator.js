"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupValidatorUpdate = exports.groupValidatorPost = void 0;
var express_validator_1 = require("express-validator");
var groupValidatorPost = function () {
    //console.log(body)
    return [
        express_validator_1.body('address_city').exists().notEmpty().withMessage('Address city is required'),
        express_validator_1.body('address_street').exists().notEmpty().withMessage('Address street is required'),
        express_validator_1.body('address_state').exists().notEmpty().withMessage('Address state is required'),
        express_validator_1.body('address_zip').exists().notEmpty().withMessage('Zipcode is required'),
        express_validator_1.body('dba').exists().notEmpty().withMessage('Dba is required'),
        express_validator_1.body('ein').exists().notEmpty().withMessage('Ein is required'),
        express_validator_1.body('email').exists().isEmail().withMessage('Email is required'),
        express_validator_1.body('launch_date').exists().isDate().withMessage('Launch date is required'),
        express_validator_1.body('legal_company').exists().notEmpty().withMessage('Legal company is required'),
        express_validator_1.body('name').exists().notEmpty().withMessage('Name is required'),
        // body('phone').exists().withMessage('Phone number is required'),
        express_validator_1.body('region').exists().notEmpty().withMessage('Region is required'),
        express_validator_1.body('signing_date').exists().isDate().withMessage('Signing date is required'),
        express_validator_1.body('tax_rate').exists().notEmpty().withMessage('Tax rate is required'),
        express_validator_1.body('territory_zips').exists().notEmpty().withMessage('Territory zips is required'),
        express_validator_1.body('time_zone').exists().notEmpty().withMessage('Time zone is required'),
        express_validator_1.body('webpage').exists().isURL().withMessage('Webpage is required'),
        express_validator_1.body('phone').exists().custom(function (value) {
            if (!value.match(/^[2-9]\d{2}-?\d{3}-?\d{4}$/)) {
                throw new Error('Valid phone number required');
            }
            return true;
        })
    ];
};
exports.groupValidatorPost = groupValidatorPost;
var groupValidatorUpdate = function () {
    return [
        express_validator_1.body('address_city').optional().notEmpty().withMessage('Address city is required'),
        express_validator_1.body('address_street').optional().notEmpty().withMessage('Address street is required'),
        express_validator_1.body('address_state').optional().notEmpty().withMessage('Address state is required'),
        express_validator_1.body('address_zip').optional().notEmpty().withMessage('Zipcode is required'),
        express_validator_1.body('dba').optional().notEmpty().withMessage('Dba is required'),
        express_validator_1.body('ein').optional().notEmpty().withMessage('Ein is required'),
        express_validator_1.body('email').optional().isEmail().withMessage('Email is required'),
        express_validator_1.body('launch_date').optional().isDate().withMessage('Launch date is required'),
        express_validator_1.body('legal_company').optional().notEmpty().withMessage('Legal company is required'),
        express_validator_1.body('name').optional().notEmpty().withMessage('Name is required'),
        // body('phone').exists().withMessage('Phone number is required'),
        express_validator_1.body('region').optional().notEmpty().withMessage('Region is required'),
        express_validator_1.body('signing_date').optional().isDate().withMessage('Signing date is required'),
        express_validator_1.body('tax_rate').optional().notEmpty().withMessage('Tax rate is required'),
        express_validator_1.body('territory_zips').optional().notEmpty().withMessage('Territory zips is required'),
        express_validator_1.body('time_zone').optional().notEmpty().withMessage('Time zone is required'),
        express_validator_1.body('webpage').optional().isURL().withMessage('Webpage is required'),
        express_validator_1.body('phone').optional().custom(function (value) {
            if (!value.match(/^[2-9]\d{2}-?\d{3}-?\d{4}$/)) {
                throw new Error('Valid phone number required');
            }
            return true;
        })
    ];
};
exports.groupValidatorUpdate = groupValidatorUpdate;
