// Old Delete function
// Delete Contact by Object Id
// Commented out so it can not be used.
// exports.delete = async function(req, res) {
//     try {
//         let deleteContact = await Contact.deleteOne({ _id: req.params._id }).exec()
//         if (deleteContact) {
//             res.json({
//                 status: "success",
//                 message: 'Contact successfully deleted'
//             })
//         } else {
//             res.json({ message: 'Failed to delete contact' })
//         }
//     } catch (err) {
//         res.json({ message: err.message })
//     }
// };
