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
exports.add = async function(req, res) {
    try {
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
        let newProspect = await prospect.save()
        if (newProspect) {
            res.json({
                status: "success",
                status: 201,
                message: "New prospect created!",
            })
        } else {
            res.status(304).json({ status: 'something went wrong' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }

};

// Update prospect by Object id
exports.update = async function(req, res) {
    try {
        let prospect = await Prospect.findById(req.params._id).exec()
        if (prospect) {
            prospect.group_id = req.body.group_id;
            prospect.account_name = req.body.account_name;
            prospect.first_name = req.body.first_name;
            prospect.last_name = req.body.last_name;
            prospect.owner_id = req.body.owner_id;
            prospect.is_active = req.body.is_active;
            prospect.stage = req.body.stage;
            prospect.geo_location = req.body.geo_location;
            prospect.created = req.body.created;
            let updatedProspect = await prospectToUpdate.save()
            if (updatedProspect) {
                res.status(204).json({
                    status: "success",
                    status: 204,
                    message: "Prospect Updated Successfully",
                    data: updatedProspect
                })
            } else {
                res.status(400).json({ message: 'Failed to update', status: 400 })
            }
        } else {
            res.status(400).json({ message: 'Prospect not found' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }


};

// Delete Prospect by Object Id
exports.delete = async function(req, res) {
    try {
        let deleteProspect = await Prospect.deleteOne({ _id: req.params._id }).exec()
        if (deleteProspect) {
            res.status(204).json({
                status: "success",
                message: 'Prospect successfully deleted'
            })
        } else {
            res.status(400).json({ message: 'Failed to delete' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }

};