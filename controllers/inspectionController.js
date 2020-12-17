//Import Inspection Model
Inspection = require('../models/inspectionModel.js');

//For server
exports.server = function (req, res) {
    Inspection.get(function (err, inspection) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        else res.json({
            status: "success",
            message: "Got Inspection Successfully!",
            data: inspection       
        });
    });
};

//For creating new inspection
exports.add = function (req, res) {
    var inspection = new Inspection();
    inspection.inspection_id = req.body.inspection_id ? req.body.inspection_id : inspection.inspection_id;
    inspection.group_id = req.body.group_id;
    inspection.truck_id = req.body.truck_id;
    inspection.user = req.body.user;
    inspection.type = req.body.type;
    inspection.status = req.body.status

    //Save and check error
    inspection.save(function (err) {
        if (err)
            res.json(err);

        else res.json({
            message: "New Inspection Added!",
            data: inspection
        });
    });
};

// View Inspection by mongo object id
exports.view = function (req, res) {
    Inspection.findById(req.params.inspection_id, function (err, inspection) {
        if (err)
            res.send(err);
        res.json({
            message: 'Inspection Details',
            data: inspection
        });
    });
};

// Update Inspection
exports.update = function (req, res) {
    Inspection.findById(req.params.inspection_id, function (err, inspection) {
        if (err)
            res.send(err);
        inspection.inspection_id = req.body.inspection_id ? req.body.inspection_id : inspection.inspection_id;
        inspection.group_id = req.body.group_id;
        inspection.truck_id = req.body.truck_id;
        inspection.user = req.body.user;
        inspection.type = req.body.type;
        inspection.status = req.body.status

        //save and check errors
        inspection.save(function (err) {
            if (err)
                res.json(err)
            else res.json({
                message: "Inspection Updated Successfully",
                data: inspection
            });
        });
    });
};

// Delete Inspection
exports.delete = function (req, res) {
    Inspection.deleteOne({
        _id: req.params.inspection_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Inspection Deleted'
        });
    });
};

