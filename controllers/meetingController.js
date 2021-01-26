//meetingController.js
//Import Meeting Model
const Meeting = require('../models/meetingModel.js')

// For queries
exports.view = function (req, res) {
    Meeting.find(req.body, null, {
        sort: {
            title: 1
        }
    },
        function (err, query) {

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

//For creating new meeting
exports.add = async function (req, res) {
    try {
        var meeting = new Meeting();
        meeting.account_id = req.body.account_id // String, required
        meeting.group_id = req.body.group_id // String, required
        meeting.contact_id = req.body.contact_id;
        meeting.owner_id = req.body.owner_id;
        meeting.title = req.body.title;
        meeting.address_street = req.body.address_street;
        meeting.address_city = req.body.address_city;
        meeting.address_state = req.body.address_state;
        meeting.address_zip = req.body.address_zip;
        meeting.meeting_time = req.body.meeting_time;
        meeting.is_active = true;


        //Save and check error
        let newMeeting = await meeting.save()
        if (newMeeting) {
            res.json({
                status: "success",
                status: 201,
                message: "New meeting created!",
            })
        } else {
            res.json({ status: err.message })
        }

    } catch (err) {
        res.json({ message: err.message })
    }

};

// Update Meeting by Object Id
exports.update = function (req, res) {
    Meeting.findById(req.params._id, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err
            });
        meeting._id = req.body._id ? req.body._id : meeting._id;
        meeting.account_id = req.body.account_id ? req.body.account_id : meeting.account_id;
        meeting.group_id = req.body.group_id ? req.body.group_id : meeting.group_id;
        meeting.contact_id = req.body.contact_id ? req.body.contact_id : meeting.contact_id;
        meeting.owner_id = req.body.owner_id ? req.body.owner_id : meeting.owner_id;
        meeting.title = req.body.title ? req.body.title : meeting.title;
        meeting.address_street = req.body.address_street ? req.body.address_street : meeting.address_street;
        meeting.address_city = req.body.address_city ? req.body.address_city : meeting.address_city;
        meeting.address_state = req.body.address_state ? req.body.address_state : meeting.address_state;
        meeting.address_zip = req.body.address_zip ? req.body.address_zip : meeting.address_zip;
        meeting.meeting_time = req.body.meeting_time ? req.body.meeting_time : meeting.meeting_time;
        meeting.is_active = req.body.is_active ? req.body.is_active : meeting.is_active;
        //save and check errors
        meeting.save(function (err) {
            if (err)
                res.json({
                    status: "error",
                    status: 304, // 
                    message: err
                });
            else res.json({
                status: "success",
                status: 200,
                message: "Meeting Updated Successfully",
                data: meeting
            });
        });
    });
};

// Delete Meeting by _id
exports.delete = async function (req, res) {
    try {
        let meeting = await Meeting.findOne({ _id: req.body._id }).exec()
        if (meeting) {
            meeting._id = meeting._id;
            meeting.account_id = meeting.account_id;
            meeting.group_id = meeting.group_id;
            meeting.contact_id = meeting.contact_id;
            meeting.owner_id = meeting.owner_id;
            meeting.title = meeting.title;
            meeting.address_street = meeting.address_street;
            meeting.address_city = meeting.address_city;
            meeting.address_state = meeting.address_state;
            meeting.address_zip = meeting.address_zip;
            meeting.meeting_time = meeting.meeting_time;
            meeting.is_active = false
            if (meeting) {
                res.json({
                    status: "success",
                    status: 204,
                    message: "Meeting deactivated Successfully",
                    data: meeting
                })
            }
        } else {
            res.json({ message: 'Meeting not found' })
        }
    } catch (err) {
        res.json({ message: err.message })
    }
};