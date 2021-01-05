//Import Inspection Model
Inspection = require('../models/inspectionModel.js');

// For queries
exports.view = function(req, res) {
    Invoice.find(req.body,
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
exports.add = function(req, res) {
    var inspection = new Inspection();
    inspection.group_id = req.body.group_id;
    inspection.truck_id = req.body.truck_id;
    inspection.owner_id = req.body.owner_id;
    inspection.type = req.body.type;
    inspection.is_active = req.body.is_active

    //Save and check error
    inspection.save(function(err) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err,
            });

        else res.json({
            status: "success",
            status: 201,
            message: "New Inspection Added!",
            data: inspection
        });
    });
};

// Update Inspection
exports.update = function(req, res) {
    Inspection.findById(req.params._id, function(err, inspection) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        inspection._id = req.body._id ? req.body._id : inspection._id;
        inspection.group_id = req.body.group_id;
        inspection.truck_id = req.body.truck_id;
        inspection.owner_id = req.body.owner_id;
        inspection.type = req.body.type;
        inspection.is_active = req.body.is_active

        //save and check errors
        inspection.save(function(err) {
            if (err)
                res.json({
                    status: "error",
                    status: 304, // 
                    message: err
                });
            else res.json({
                status: "success",
                status: 201,
                message: "Inspection Updated Successfully",
                data: inspection
            });
        });
    });
};

// Delete Inspection
exports.delete = function(req, res) {
    Inspection.deleteOne({
        _id: req.params._id
    }, function(err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Inspection Deleted'
        });
    });
};