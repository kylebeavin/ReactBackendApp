//Import Inspection Model
Inspection = require('../models/inspectionModel.js');

// For queries
exports.view = function(req, res) {
    Inspection.find(req.body, null, {
            sort: {
                group_id: 1
            }
        },
        function(err, query) {

            if (err) {
                res.json({
                    status: "error",
                    message: err,
                })
            } else {
                res.json({
                    status: "success",
                    message: "Working",
                    data: query
                })
            }
        })
};

//For creating new inspection
exports.add = async function(req, res) {
    try {
        var inspection = new Inspection();
        inspection.group_id = req.body.group_id;
        inspection.truck_id = req.body.truck_id;
        inspection.owner_id = req.body.owner_id;
        inspection.type = req.body.type;
        inspection.is_active = req.body.is_active


        //Save and check error
        let newInspection = await inspection.save()
        if (newInspection) {
            res.json({
                status: "success",
                status: 201,
                message: "New inspection created!",
            })
        } else {
            res.status(304).json({ status: 'something went wrong' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

// Update inspection by Object id
exports.update = async function(req, res) {
    try {
        let inspection = await Inspection.findById(req.params._id).exec()
        if (inspection) {
            inspection._id = req.body._id ? req.body._id : inspection._id;
            inspection.group_id = req.body.group_id;
            inspection.truck_id = req.body.truck_id;
            inspection.owner_id = req.body.owner_id;
            inspection.type = req.body.type;
            inspection.is_active = req.body.is_active
            let updatedInspection = await inspection.save()
            if (updatedInspection) {
                res.status(204).json({
                    status: "success",
                    status: 204,
                    message: "Inspection Updated Successfully",
                    data: updatedInspection
                })
            } else {
                res.status(400).json({ message: 'Failed to update', status: 400 })
            }
        } else {
            res.status(400).json({ message: 'Inspection not found' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }
};

// Delete Inspection by Object Id
exports.delete = async function(req, res) {
    try {
        let deleteInspection = await Inspection.deleteOne({ _id: req.params._id }).exec()
        if (deleteInspection) {
            res.status(204).json({
                status: "success",
                message: 'Inspection successfully deleted'
            })
        } else {
            res.status(400).json({ message: 'Failed to delete' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }
};