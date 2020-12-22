// // //For server
// // function exportView(crudType, model, messageType, dataType) {
// //     exports.server = function(req, res) {
// //         model.get(function(err, contact) {
// //             if (err)
// //                 res.json({
// //                     status: "error",
// //                     message: err
// //                 });
// //             else res.json({
// //                 status: "success",
// //                 message: "Got Contacts Successfully!",
// //                 data: contact
// //             });
// //         });
// //     };
// // }

// const { modelName, findById } = require('../models/userModel.js');

// Contact = require('../models/contactModel.js')

// // View Data by mongo object id
// function exportViewController(modelName, queryType, argument, message, statusPass) {
//     // propertyType; // view, update, delete
//     // modelName; // Enter the name of the respective model
//     // queryType; // findById, findOne, findMany, find
//     // argument; // req.params.field or { field: req.params.field }
//     // message; // Enter the message you want to be returned upon success
//     // statusPass; // Enter the status code to be returned upon success

//     exports.view = function (req, res) {
//         modelName.queryType(argument, function (err, data) {
//             if (err)
//                 res.status(400).send,
//                 res.send(err);
//             else res.json({
//                 status: statusPass,
//                 message: message,
//                 data: data
//             });
//         });
//     };
//     return data;
// };

// exportViewController(Contact,findById,req.params.contact_id,'Contact Details','500');
