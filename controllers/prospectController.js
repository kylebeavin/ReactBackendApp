//Import Prospect Model
const Prospect = require('../models/prospectModel.js')

// For queries
exports.view = function(req, res) {
    Prospect.find(req.body, null, {
            sort: {
                first_name: 1
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

//For creating new prospect
exports.add = function(req, res) {
    var prospect = new Prospect();
    prospect.group_id = req.body.group_id;
    prospect.account_name = req.body.account_name;
    prospect.first_name = req.body.first_name;
    prospect.last_name = req.body.last_name;
    prospect.owner_id = req.body.owner_id;
    prospect.is_active = req.body.is_active;
    prospect.stage = req.body.stage;
    prospect.geo_location = req.body.geo_location;
    prospect.created = req.body.created;

    //Save and check error
    prospect.save(function(err) {
        if (err)
            res.json(err);

        else res.json({
            message: "New Prospect Added!",
            data: prospect
        });
    });
};

// Update Prospect by Object Id
exports.update = function(req, res) {
    Prospect.findById(req.params._id, function(err, prospect) {
        if (err)
            res.send(err);
        prospect.group_id = req.body.group_id;
        prospect.account_name = req.body.account_name;
        prospect.first_name = req.body.first_name;
        prospect.last_name = req.body.last_name;
        prospect.owner_id = req.body.owner_id;
        prospect.is_active = req.body.is_active;
        prospect.stage = req.body.stage;
        prospect.geo_location = req.body.geo_location;
        prospect.created = req.body.created;

        //save and check errors
        prospect.save(function(err) {
            if (err)
                res.json(err)
            else res.json({
                message: "Prospect Updated Successfully",
                data: prospect
            });
        });
    });
};

// Delete Prospect by Object Id
exports.delete = function(req, res) {
    Prospect.deleteOne({
        _id: req.params._id
    }, function(err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Prospect Deleted by Object Id'
        });
    });
};