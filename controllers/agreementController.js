//agreementController.js
//Import Agreement Model
Agreement = require('../models/agreementModel.js')

// For queries
exports.view = function(req, res) {
    Agreement.find(req.body, null, {
            sort: {
                name: 1
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

//For creating new agreement
exports.add = async function(req, res) {
    try {
        const agreement = new Agreement();
        agreement.account_id = req.body.account_id; // String, required
        agreement.group_id = req.body.group_id; // String, required
        agreement.is_recurring = req.body.is_recurring; // String, required
        agreement.services = req.body.services; // Bool, default: true
        agreement.service_frequency = req.body.service_frequency; // Bool, default: true
        agreement.service_per = req.body.service_per; // Bool, default: true
        agreement.service_days = req.body.service_days; // Bool, default: true
        agreement.monthly_rate = req.body.monthly_rate; // Bool, default: true
        agreement.demand_rate = req.body.demand_rate; // Bool, default: true
        agreement.term_date = req.body.term_date; // Bool, default: true
        agreement.start_date = req.body.start_date; // Bool, default: true
        agreement.end_date = req.body.end_date; // Bool, default: true
        agreement.is_active = req.body.is_active; // String, required
        agreement.notes = req.body.notes // String, required
        agreement.url = req.body.url // String, required

        //Save and check error
        let newAgreement = await agreement.save()
        if (newAgreement) {
            res.json({
                status: "success",
                status: 201,
                message: "New agreement created!",
            })
        } else {
            res.status(304).json({ status: 'something went wrong' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }

};

// Update agreement by Object id
exports.update = async function(req, res) {
    try {
        let agreement = await Agreement.findById(req.params._id).exec()
        if (agreement) {
            agreement._id = req.body._id ? req.body._id : agreement._id;
            agreement.account_id = req.body.account_id; // String, required
            agreement.group_id = req.body.group_id; // String, required
            agreement.is_recurring = req.body.is_recurring; // String, required
            agreement.services = req.body.services; // Bool, default: true
            agreement.service_frequency = req.body.service_frequency; // Bool, default: true
            agreement.service_per = req.body.service_per; // Bool, default: true
            agreement.service_days = req.body.service_days; // Bool, default: true
            agreement.monthly_rate = req.body.monthly_rate; // Bool, default: true
            agreement.demand_rate = req.body.demand_rate; // Bool, default: true
            agreement.term_date = req.body.term_date; // Bool, default: true
            agreement.start_date = req.body.start_date; // Bool, default: true
            agreement.end_date = req.body.end_date; // Bool, default: true
            agreement.is_active = req.body.is_active; // String, required
            agreement.notes = req.body.notes; // String, required
            agreement.url = req.body.url; // String, required
            let updatedAgreement = await agreement.save()
            if (updatedAgreement) {
                res.status(204).json({
                    status: "success",
                    status: 204,
                    message: "Agreement Updated Successfully",
                    data: updatedAgreement
                })
            } else {
                res.status(400).json({ message: 'Failed to update', status: 400 })
            }
        } else {
            res.status(400).json({ message: 'Agreement not found' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }
};

// Delete Agreement by Object Id
exports.delete = async function(req, res) {
    try {
        let deleteAgreement = await Agreement.deleteOne({ _id: req.params._id }).exec()
        if (deleteAgreement) {
            res.status(204).json({
                status: "success",
                message: 'Agreement successfully deleted'
            })
        } else {
            res.status(400).json({ message: 'Failed to delete' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }

};