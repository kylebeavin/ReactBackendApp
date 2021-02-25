"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agreementValidatorUpdate = exports.agreementValidatorPost = void 0;
var express_validator_1 = require("express-validator");
var agreementValidatorPost = function () {
    //console.log(body)
    return [
        express_validator_1.body('account_id').exists().notEmpty().withMessage('Account id is required'),
        express_validator_1.body('demand_rate').exists().notEmpty().withMessage('Demand rate is required'),
        express_validator_1.body('end_date').exists().isDate().withMessage('End date required'),
        express_validator_1.body('group_id').exists().notEmpty().withMessage('Group id is required'),
        express_validator_1.body('monthly_rate').exists().notEmpty().withMessage('Monthly rate is required'),
        express_validator_1.body('owner_id').exists().notEmpty().withMessage('Owner id is required'),
        express_validator_1.body('is_recurring').exists().notEmpty().withMessage('Recurring field is required'),
        express_validator_1.body('services').exists().isIn(['smash', 'hourly_smashing', 'monthly_recurring_charge',
            'haul_charge', 'lease_fee', 'delivery_charge', 'drop_fee',
            'environmental_recovery_fee', 'blocked_fee', 'card_processing_fee',
            'fuel_surcharge', 'statement_fee', 'past_due', 'discount', 'misc'
        ]).withMessage('Services is required'),
        express_validator_1.body('service_days').exists().isIn(['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']).withMessage('Choose a vaild day of the week is required'),
        express_validator_1.body('service_per').exists().isIn(['day', 'week', 'month']).withMessage('Choose a valid option of day , week or month'),
        express_validator_1.body('start_date').exists().isDate().withMessage('Start date is required'),
        express_validator_1.body('service_frequency').exists().notEmpty().withMessage('Service frequency is required'),
        express_validator_1.body('term_date').exists().notEmpty().withMessage('Term date is required'),
        express_validator_1.body('end_date').custom(function (value, _a) {
            var req = _a.req;
            if (new Date(value) < new Date(req.body.start_date)) {
                throw new Error('End date should be after start date');
            }
            return true;
        }),
    ];
};
exports.agreementValidatorPost = agreementValidatorPost;
var agreementValidatorUpdate = function () {
    return [
        express_validator_1.body('account_id').optional().notEmpty().withMessage('Valid Account id is required'),
        express_validator_1.body('demand_rate').optional().notEmpty().withMessage('Valid Demand rate is required'),
        express_validator_1.body('end_date').optional().notEmpty().withMessage('Valid End date required'),
        express_validator_1.body('group_id').optional().notEmpty().withMessage('Valid Group id is required'),
        express_validator_1.body('monthly_rate').optional().notEmpty().withMessage('Valid Monthly rate is required'),
        express_validator_1.body('owner_id').optional().notEmpty().withMessage('Valid Owner id is required'),
        express_validator_1.body('is_recurring').optional().notEmpty().withMessage('Valid Recurring field is required'),
        express_validator_1.body('services').optional().isIn(['smash', 'hourly_smashing', 'monthly_recurring_charge',
            'haul_charge', 'lease_fee', 'delivery_charge', 'drop_fee',
            'environmental_recovery_fee', 'blocked_fee', 'card_processing_fee',
            'fuel_surcharge', 'statement_fee', 'past_due', 'discount', 'misc'
        ]).withMessage('Valid Services is required'),
        express_validator_1.body('service_days').optional().isIn(['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']).withMessage('Choose a vaild day of the week is required'),
        express_validator_1.body('service_per').optional().isIn(['day', 'week', 'month']).withMessage('Choose a valid option of day, week or month'),
        express_validator_1.body('start_date').optional().isDate().withMessage('Valid Start date is required'),
        express_validator_1.body('service_frequency').optional().notEmpty().withMessage('Valid Service frequency is required'),
        express_validator_1.body('term_date').optional().notEmpty().withMessage('Valid Term date is required'),
        express_validator_1.body('end_date').optional().isDate().withMessage('Valid Date is required').custom(function (value, _a) {
            var req = _a.req;
            if (new Date(value) < new Date(req.body.start_date)) {
                throw new Error('End date should be after start date');
            }
            return true;
        }),
    ];
};
exports.agreementValidatorUpdate = agreementValidatorUpdate;
