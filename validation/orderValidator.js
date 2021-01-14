const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateOrderInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.account_id = !isEmpty(data.account_id) ? data.account_id : "";
  data.group_id = !isEmpty(data.group_id)?data.group_id:''
  data.is_recurring = !isEmpty(data.is_recurring) ? data.is_recurring : "";
  
  // Name checks
  if (Validator.isEmpty(data.account_id)) {
    errors.account_id = "Account Id is required";
  }
  //usename checks
  if (Validator.isEmpty(data.group_id)) {
    errors.group_id = 'Group Id is required'
  }
  // Email checks
  if (Validator.isEmpty(data.is_recurring)) {
    errors.is_recurring = "Please select an option";
  } else if (!Validator.isBoolean(data.is_recurring)) {
    errors.is_recurring = "Please enter a valid field";
  }
 
  
  return {
    errors,
    isValid: isEmpty(errors),
  };
};