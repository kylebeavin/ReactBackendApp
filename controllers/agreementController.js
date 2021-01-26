//agreementController.js
//Import Agreement Model
const Agreement = require('../models/agreementModel.js')

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
        agreement.account_id = req.body.account_id; 
        agreement.group_id = req.body.group_id; 
        agreement.is_recurring = req.body.is_recurring; 
        agreement.services = req.body.services; 
        agreement.service_frequency = req.body.service_frequency; 
        agreement.service_per = req.body.service_per; 
        agreement.service_days = req.body.service_days; 
        agreement.monthly_rate = req.body.monthly_rate; 
        agreement.demand_rate = req.body.demand_rate; 
        agreement.term_date = req.body.term_date; 
        agreement.start_date = req.body.start_date; 
        agreement.end_date = req.body.end_date; 
        agreement.is_active = req.body.is_active; 
        agreement.notes = req.body.notes != null ? req.body.notes : null 
        agreement.url = req.body.url != null ? req.body.url : null 

        //Save and check error
        let newAgreement = await agreement.save()
        if (newAgreement) {
            res.json({
                status: "success",
                status: 201,
                message: "New agreement created!",
            })
        } else {
            res.json({ status: 'Failed to create agreement' })
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
            agreement.account_id = req.body.account_id ? req.body.account_id : agreement.account_id; 
            agreement.group_id = req.body.group_id ? req.body.group_id : agreement.group_id; 
            agreement.is_recurring = req.body.is_recurring ? req.body.is_recurring : agreement.is_recurring; 
            agreement.services = req.body.services ? req.body.services : agreement.services; 
            agreement.service_frequency = req.body.service_frequency ? req.body.service_frequency : agreement.service_frequency; 
            agreement.service_per = req.body.service_per ? req.body.service_per : agreement.service_per; 
            agreement.service_days = req.body.service_days ? req.body.service_days : agreement.service_days; 
            agreement.monthly_rate = req.body.monthly_rate ? req.body.monthly_rate : agreement.monthly_rate; 
            agreement.demand_rate = req.body.demand_rate ? req.body.demand_rate : agreement.demand_rate; 
            agreement.term_date = req.body.term_date ? req.body.term_date : agreement.term_date; 
            agreement.start_date = req.body.start_date ? req.body.start_date : agreement.start_date; 
            agreement.end_date = req.body.end_date ? req.body.end_date : agreement.end_date; 
            agreement.is_active = req.body.is_active ? req.body.is_active : agreement.is_active; 
            agreement.notes = req.body.notes ? req.body.notes : agreement.notes; 
            agreement.url = req.body.url ? req.body.url : agreement.url; 
            let updatedAgreement = await agreement.save()
            if (updatedAgreement) {
                res.json({
                    status: "success",
                    status: 204,
                    message: "Agreement Updated Successfully",
                    data: updatedAgreement
                })
            } else {
                res.json({ message: 'Failed to update agreement', status: 400 })
            }
        } else {
            res.json({ message: 'Agreement not found' })
        }
    } catch (err) {
        res.json({ message: err.message })
    }
};

// Delete Agreement by _id
exports.delete = async function (req, res) {
	try {
		let agreement = await Agreement.findOne({ _id: req.body._id }).exec()
		if (agreement) {
            agreement.account_id = agreement.account_id; 
            agreement.group_id = agreement.group_id; 
            agreement.is_recurring = agreement.is_recurring; 
            agreement.services = agreement.services; 
            agreement.service_frequency = agreement.service_frequency; 
            agreement.service_per = agreement.service_per; 
            agreement.service_days = agreement.service_days; 
            agreement.monthly_rate = agreement.monthly_rate; 
            agreement.demand_rate = agreement.demand_rate; 
            agreement.term_date = agreement.term_date; 
            agreement.start_date = agreement.start_date; 
            agreement.end_date = agreement.end_date; 
            agreement.notes = agreement.notes
            agreement.url = agreement.url
            agreement.is_active = false
			if (user) {
				res.json({
					status: "success",
					status: 204,
					message: "Agreement deactivated Successfully",
					data: user
				})
			}
		} else {
			res.json({ message: 'Agreement not found' })
		}
	} catch (err) {
		res.json({ message: err.message })
	}
};