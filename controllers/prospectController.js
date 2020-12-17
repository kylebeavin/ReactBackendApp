//Import Prospect Model
Prospect = require('../models/prospectModel.js')

//For server
exports.server = function(req, res) {
    Prospect.get(function(err, prospect) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        else res.json({
            status: "success",
            message: "Got Prospect Successfully!",
            data: prospect
        });
    });
};

//For creating new prospect
exports.add = function(req, res) {
    var prospect = new Prospect();
    prospect.group_id = req.body.group_id;
    prospect.name = req.body.name;
    prospect.owner_id = req.body.owner_id;
    prospect.is_active = req.body.is_active;
    prospect.stage = req.body.stage;
    prospect.geo_location = req.body.geo_location;
    prospect.created = req.body.created;

    //Save and check error
    prospect.save(function(err) {
        if (err)
            res.json(err);

        res.json({
            message: "New Prospect Added!",
            data: prospect
        });
    });
};

// View Prospect by mongo object id
exports.viewProspectById = function(req, res) {
    Prospect.findById(req.params._id, function(err, prospect) {
        if (err)
            res.send(err);
        res.json({
            message: 'Prospect Details by Object Id',
            data: prospect
        });
    });
};

// View Prospects by group
exports.viewProspectByGroup = function(req, res) {
    Prospect.find({ group_id: req.params.group_id }, function(err, prospect) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got prospects by group',
            data: prospect
        });
    });
};

// View Prospect by name TODO: Fix this
exports.viewProspectByName = function(req, res) {
    Prospect.find({ name: req.params.name }, function(err, prospect) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got prospects by name',
            data: prospect
        });
    });
};

// View Prospects by owner Id
exports.viewProspectByOwnerId = function(req, res) {
    Prospect.find({ owner_id: req.params.owner_id }, function(err, prospect) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got prospects associated with owner id',
            data: prospect
        });
    });
};

// View Prospects by is_activate status
exports.viewProspectByIsActive = function(req, res) {
    Prospect.find({ is_active: req.params.is_active }, function(err, prospect) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got prospects by active status',
            data: prospect
        });
    });
};

// View Prospects by sales stage
exports.viewProspectByStage = function(req, res) {
    Prospect.find({ stage: req.params.stage }, function(err, prospect) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got prospects by sales stage',
            data: prospect
        });
    });
};

// View Prospects by Zip
exports.viewProspectByGeoLocation = function(req, res) {
    Prospect.find({ geo_location: req.params.geo_location }, function(err, prospect) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got prospects by GeoLocation',
            data: prospect
        });
    });
};

// View Prospects by Creation Date
exports.viewProspectByCreation = function(req, res) {
    Prospect.find({ created: req.params.created }, function(err, prospect) {
        if (err)
            res.send(err);
        res.json({
            message: 'Got prospects by Creation Date',
            data: prospect
        });
    });
};



// Update Prospect by Object Id
exports.updateProspectById = function(req, res) {
    Prospect.findById(req.params._id, function(err, prospect) {
        if (err)
            res.send(err);
        prospect.group_id = req.body.group_id;
        prospect.name = req.body.name;
        prospect.owner_id = req.body.owner_id;
        prospect.is_active = req.body.is_active;
        prospect.stage = req.body.stage;
        prospect.geo_location = req.body.geo_location;
        prospect.created = req.body.created;

        //save and check errors
        prospect.save(function(err) {
            if (err)
                res.json(err)
            res.json({
                message: "Prospect Updated Successfully",
                data: prospect
            });
        });
    });
};

// Update Prospect
exports.updateProspectByGroup = function(req, res) {
    Prospect.find(req.params.group_id, function(err, prospect) {
        if (err)
            res.send(err);
        prospect.group_id = req.body.group_id;
        prospect.name = req.body.name;
        prospect.owner_id = req.body.owner_id;
        prospect.is_active = req.body.is_active;
        prospect.stage = req.body.stage;
        prospect.geo_location = req.body.geo_location;
        prospect.created = req.body.created;
        //save and check errors
        prospect.save(function(err) {
            if (err)
                res.json(err)
            res.json({
                message: "All Prospects in Group Updated Successfully",
                data: prospect
            });
        });
    });
};
// Update Prospect by name
exports.updateProspectByName = function(req, res) {
    Prospect.find(req.params.name, function(err, prospect) {
        if (err)
            res.send(err);
        prospect.group_id = req.body.group_id;
        prospect.name = req.body.name;
        prospect.owner_id = req.body.owner_id;
        prospect.is_active = req.body.is_active;
        prospect.stage = req.body.stage;
        prospect.geo_location = req.body.geo_location;
        prospect.created = req.body.created;
        //save and check errors
        prospect.save(function(err) {
            if (err)
                res.json(err)
            res.json({
                message: "Prospects Updated Successfully by Name",
                data: prospect
            });
        });
    });
};

// Update all Prospects by Owner Id
exports.updateProspectByOwnerId = function(req, res) {
    Prospect.find(req.params.owner_id, function(err, prospect) {
        if (err)
            res.send(err);
        prospect.group_id = req.body.group_id;
        prospect.name = req.body.name;
        prospect.owner_id = req.body.owner_id;
        prospect.is_active = req.body.is_active;
        prospect.stage = req.body.stage;
        prospect.geo_location = req.body.geo_location;
        prospect.created = req.body.created;
        //save and check errors
        prospect.save(function(err) {
            if (err)
                res.json(err)
            res.json({
                message: "All Prospects for User Updated Successfully",
                data: prospect
            });
        });
    });
};

// Update all Prospects by Is Active Status
exports.updateProspectByIsActive = function(req, res) {
    Prospect.find(req.params.is_active, function(err, prospect) {
        if (err)
            res.send(err);
        prospect.group_id = req.body.group_id;
        prospect.name = req.body.name;
        prospect.owner_id = req.body.owner_id;
        prospect.is_active = req.body.is_active;
        prospect.stage = req.body.stage;
        prospect.geo_location = req.body.geo_location;
        prospect.created = req.body.created;

        //save and check errors
        prospect.save(function(err) {
            if (err)
                res.json(err)
            res.json({
                message: "All Prospects for Status Updated Successfully",
                data: prospect
            });
        });
    });
};

// Update all Prospects by Stage
exports.updateProspectByStage = function(req, res) {
    Prospect.find(req.params.stage, function(err, prospect) {
        if (err)
            res.send(err);
        prospect.group_id = req.body.group_id;
        prospect.name = req.body.name;
        prospect.owner_id = req.body.owner_id;
        prospect.is_active = req.body.is_active;
        prospect.stage = req.body.stage;
        prospect.geo_location = req.body.geo_location;
        prospect.created = req.body.created;
        //save and check errors
        prospect.save(function(err) {
            if (err)
                res.json(err)
            res.json({
                message: "All Prospects in Stage Updated Successfully",
                data: prospect
            });
        });
    });
};

// Update all Prospects by GeoLocation
exports.updateProspectByGeoLocation = function(req, res) {
    Prospect.find(req.params.geo_location, function(err, prospect) {
        if (err)
            res.send(err);
        prospect.group_id = req.body.group_id;
        prospect.name = req.body.name;
        prospect.owner_id = req.body.owner_id;
        prospect.is_active = req.body.is_active;
        prospect.stage = req.body.stage;
        prospect.geo_location = req.body.geo_location;
        prospect.created = req.body.created;
        //save and check errors
        prospect.save(function(err) {
            if (err)
                res.json(err)
            res.json({
                message: "All Prospects in GeoLocation Updated Successfully",
                data: prospect
            });
        });
    });
};

// Update all Prospects by Creation
exports.updateProspectByCreation = function(req, res) {
    Prospect.find(req.params.created, function(err, prospect) {
        if (err)
            res.send(err);
        prospect.group_id = req.body.group_id;
        prospect.name = req.body.name;
        prospect.owner_id = req.body.owner_id;
        prospect.is_active = req.body.is_active;
        prospect.stage = req.body.stage;
        prospect.geo_location = req.body.geo_location;
        prospect.created = req.body.created;
        //save and check errors
        prospect.save(function(err) {
            if (err)
                res.json(err)
            res.json({
                message: "All Prospects by Creation Date Updated Successfully",
                data: prospect
            });
        });
    });
};

// Delete Prospect by Object Id
exports.deleteProspectById = function(req, res) {
    Prospect.deleteOne({
        _id: req.params._id
    }, function(err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Prospect Deleted by Object Id'
        });
    });
};

// Delete Prospect by Group Id
exports.deleteProspectByGroupId = function(req, res) {
    Prospect.delete({
        group_id: req.params.group_id
    }, function(err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Prospect Deleted by Group Id'
        });
    });
};

// Delete Prospect by Name
exports.deleteProspectByName = function(req, res) {
    Prospect.delete({
        name: req.params.name
    }, function(err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Prospect Deleted by Prospect Name'
        });
    });
};

// Delete Prospect by Owner_Id
exports.deleteProspectByOwnerId = function(req, res) {
    Prospect.delete({
        owner_id: req.params.owner_id
    }, function(err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Prospect Deleted by Owner Id'
        });
    });
};

// Delete Prospect by Is Active Status
exports.deleteProspectByIsActiveStatus = function(req, res) {
    Prospect.delete({
        is_active: req.params.is_active
    }, function(err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Prospect Deleted by Status'
        });
    });
};

// Delete Prospect by Stage
exports.deleteProspectByStage = function(req, res) {
    Prospect.delete({
        stage: req.params.stage
    }, function(err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Prospect Deleted by Stage'
        });
    });
};



// Delete Prospect by GeoLocation
exports.deleteProspectByGeoLocation = function(req, res) {
    Prospect.delete({
        geo_location: req.params.geo_location
    }, function(err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Prospect Deleted by GeoLocation'
        });
    });
};

// Delete Prospect by Creation Date
exports.deleteProspectByCreation = function(req, res) {
    Prospect.delete({
        created: req.params.created
    }, function(err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Prospect Deleted by Creation'
        });
    });
};