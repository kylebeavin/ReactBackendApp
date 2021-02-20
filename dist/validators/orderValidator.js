"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidatorUpdate = exports.orderValidatorPost = void 0;
var express_validator_1 = require("express-validator");
var orderValidatorPost = function () {
    //console.log(body)
    return [
        express_validator_1.body('account_id').exists().notEmpty().withMessage('Account id is required'),
        express_validator_1.body('demand_rate').exists().notEmpty().withMessage('Demand rate is required'),
        express_validator_1.body('end_date').exists().isDate().withMessage('End date required'),
        express_validator_1.body('group_id').exists().notEmpty().withMessage('Group id is required'),
        express_validator_1.body('monthly_rate').exists().notEmpty().withMessage('Monthly rate is required'),
        express_validator_1.body('owner_id').exists().notEmpty().withMessage('Owner id is required'),
        //body('is_recurring').exists().notEmpty().withMessage('Recurring field is required'),
        //body('services').exists().notEmpty().withMessage('Services is required'),
        express_validator_1.body('service_days').exists().isIn(['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']).withMessage('Choose a valid service day of the week'),
        express_validator_1.body('service_per').exists().isIn(['day', 'week', 'month']).withMessage('Service per field is required'),
        express_validator_1.body('start_date').isDate().withMessage('Start date is required'),
        express_validator_1.body('service_frequency').exists().notEmpty().withMessage('Service frequency is required'),
        express_validator_1.body('term_date').exists().notEmpty().withMessage('Term date is required'),
        express_validator_1.body('notes').exists().notEmpty().withMessage('Notes is required'),
        express_validator_1.body('url').exists().isURL().withMessage('url is required'),
        express_validator_1.body('end_date').custom(function (value, _a) {
            var req = _a.req;
            if (new Date(value) < new Date(req.body.start_date)) {
                throw new Error('End date should be after start date');
            }
            return true;
        }),
    ];
};
exports.orderValidatorPost = orderValidatorPost;
var orderValidatorUpdate = function () {
    return [
        express_validator_1.body('account_id').optional().notEmpty().withMessage('Valid Account id is required'),
        express_validator_1.body('demand_rate').optional().notEmpty().withMessage('Valid Demand rate is required'),
        express_validator_1.body('end_date').optional().isDate().withMessage('Valid End date required'),
        express_validator_1.body('group_id').optional().notEmpty().withMessage('Valid Group id is required'),
        express_validator_1.body('monthly_rate').optional().notEmpty().withMessage('Valid Monthly rate is required'),
        express_validator_1.body('owner_id').optional().notEmpty().withMessage('Valid Owner id is required'),
        //body('is_recurring').optional().notEmpty().withMessage('Valid Recurring field is required'),
        //body('services').optional().notEmpty().withMessage('Valid Services is required'),
        express_validator_1.body('service_days').optional().isIn(['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']).withMessage('Valid Service days is required'),
        express_validator_1.body('service_per').optional().isIn(['day', 'week', 'month']).withMessage('Valid Service per field is required'),
        express_validator_1.body('start_date').optional().isDate().withMessage('Valid Start date is required'),
        express_validator_1.body('service_frequency').optional().notEmpty().withMessage('Valid Service frequency is required'),
        express_validator_1.body('term_date').optional().notEmpty().withMessage('Valid Term date is required'),
        express_validator_1.body('notes').optional().notEmpty().withMessage('Notes is required'),
        express_validator_1.body('url').optional().isURL().withMessage('url is required'),
        express_validator_1.body('end_date').optional().custom(function (value, _a) {
            var req = _a.req;
            if (new Date(value) < new Date(req.body.start_date)) {
                throw new Error('End date should be after start date');
            }
            return true;
        }),
    ];
};
exports.orderValidatorUpdate = orderValidatorUpdate;
