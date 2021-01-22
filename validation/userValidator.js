const Validator = require("validator");
const isEmpty = require("is-empty");
exports.validateUserInput = function(data) {
    let errors = {};
    let { email, password, token, image, first_name, last_name, role, group_id } = data

    // Convert empty fields to an empty string so we can use validator functions
    data.email = !isEmpty(email) ? email : "";
    data.password = !isEmpty(password) ? password : "";
    data.token = !isEmpty(token) ? token : "";
    data.image = !isEmpty(image) ? image : "";
    data.first_name = !isEmpty(first_name) ? first_name : "";
    data.last_name = !isEmpty(last_name) ? last_name : "";
    data.display_name = !isEmpty(last_name) ? last_name : "";
    data.role = !isEmpty(role) ? role : "";
    data.group_id = !isEmpty(group_id) ? group_id : "";

    // email check
    if (Validator.isEmpty(data.account_id)) {
        errors.email = "Email address field is required";
    }
    // password check
    if (Validator.isEmpty(data.group_id)) {
        errors.password = 'Password field is required';
    }
    // token check
    if (Validator.isEmpty(data.is_recurring)) {
        errors.token = 'Token field is required';
    }
    // image check
    if (Validator.isEmpty(data.is_recurring)) {
        errors.image = 'Image field is required';
    }
    // first_name check
    if (Validator.isEmpty(data.is_recurring)) {
        errors.first_name = 'First Name field is required';
    }
    // last_name check
    if (Validator.isEmpty(data.is_recurring)) {
        errors.last_name = 'Last Name field is required';
    }
    // display_name check
    if (Validator.isEmpty(data.is_recurring)) {
        errors.display_name = 'Display Name field is required';
    }
    // role check
    if (Validator.isEmpty(data.is_recurring)) {
        errors.role = 'Role field is required';
    } else {
        let options = ['corporate', 'admin', 'partner',
            'gm', 'sales', 'driver', 'mechanic'
        ]
        if (!options.includes(roles))
            errors.roles = "Please enter a valid role";
    }

    //group_id check
    if (Validator.isEmpty(data.group_id)) {
        errors.group_id = 'Group Id field is required'
    }

    console.log(errors)
    return {
        errors,
        isValid: isEmpty(errors),
    };
};