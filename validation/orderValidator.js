const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateOrderInput(data) {
  let errors = {};
  let {account_id, group_id, is_recurring} = data
  account_id = account_id.trim()
  group_id = group_id.trim()
  // Convert empty fields to an empty string so we can use validator functions
  data.account_id = !isEmpty(account_id) ? account_id : "";
  data.group_id = !isEmpty(group_id)? group_id:''
  data.is_recurring = !isEmpty(is_recurring) ? is_recurring : "";
  
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