// //For server
// function exportView(crudType, model, messageType, dataType) {
//     exports.server = function(req, res) {
//         model.get(function(err, contact) {
//             if (err)
//                 res.json({
//                     status: "error",
//                     message: err
//                 });
//             else res.json({
//                 status: "success",
//                 message: "Got Contacts Successfully!",
//                 data: contact
//             });
//         });
//     };
// }