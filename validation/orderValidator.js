const Validator = require("validator");
const isEmpty = require("is-empty");
exports.validateOrderInput = function(data) {
    let errors = {};
    let { account_id, group_id, is_recurring, services, services_frequency, service_per, service_days, monthly_rate, demand_rate, term_rate, start_date, end_date, notes, url } = data

    // Convert empty fields to an empty string so we can use validator functions
    data.account_id = !isEmpty(account_id) ? account_id : "";
    data.group_id = !isEmpty(group_id) ? group_id : ''
    data.is_recurring = !isEmpty(is_recurring) ? is_recurring : "";
    data.services = !isEmpty(services) ? services : "";
    data.services_frequency = !isEmpty(services_frequency) ? services_frequency : "";
    data.service_per = !isEmpty(service_per) ? service_per : "";
    data.service_days = !isEmpty(service_days) ? service_days : "";
    data.monthly_rate = !isEmpty(monthly_rate) ? monthly_rate : "";
    data.demand_rate = !isEmpty(demand_rate) ? demand_rate : "";
    data.term_rate = !isEmpty(term_rate) ? term_rate : "";
    data.start_date = !isEmpty(start_date) ? start_date : "";
    data.end_date = !isEmpty(end_date) ? end_date : "";
    data.notes = !isEmpty(notes) ? notes : "";
    data.url = !isEmpty(url) ? url : ''

    // Name checks
    if (Validator.isEmpty(data.account_id)) {
        errors.account_id = "Account Id is required";
    }
    //group_id check
    if (Validator.isEmpty(data.group_id)) {
        errors.group_id = 'Group Id is required'
    }
    // is_recurring check
    if (Validator.isEmpty(data.is_recurring)) {
        errors.is_recurring = "Please select an option";
    } else if (!Validator.isBoolean(data.is_recurring)) {
        errors.is_recurring = "Please enter a valid field";
    }
    //services check
    if (Validator.isEmpty(data.services)) {
        errors.services = "Please select an option";
    } else {
        let options = ['smash', 'hourly_smashing', 'monthly_recurring_charge',
            'haul_charge', 'lease_fee', 'delivery_charge', 'drop_fee',
            'environmental_recovery_fee', 'blocked_fee', 'card_processing_fee',
            'fuel_surcharge', 'statement_fee', 'past_due', 'discount', 'misc'
        ]
        if (!options.includes(services))
            errors.services = "Please enter a valid field";
    }
    //service_frequency check
    if (Validator.isEmpty(data.services_frequency)) {
        errors.service_frequency = 'This field is required'
    }
    //service_per check
    if (Validator.isEmpty(data.service_per)) {
        errors.service_per = 'This field is required'
    }
    //service_days check
    if (Validator.isEmpty(data.service_days)) {
        errors.service_days = 'This field is required'
    }
    //monthly_rate check
    if (Validator.isEmpty(data.monthly_rate)) {
        errors.monthly_rate = 'This field is required'
    }

    //demand_rate check
    if (Validator.isEmpty(data.demand_rate)) {
        errors.demand_rate = 'This field is required'
    }
    //term-date
    if (Validator.isEmpty(data.term_rate)) {
        errors.term_date = 'This field is required'
    }
    //start_date
    if (Validator.isEmpty(data.start_date)) {
        errors.start_date = 'This field is required'
    }
    //end_date
    if (Validator.isEmpty(data.end_date)) {
        errors.end_date = 'This field is required'
    }
    //notes
    if (Validator.isEmpty(data.notes)) {
        errors.notes = 'This field is required'
    }
    //url
    if (Validator.isEmpty(data.url)) {
        errors.service_days = 'This field is required'
    }
    console.log(errors)
    return {
        errors,
        isValid: isEmpty(errors),
    };
};