//meetingController.js
//Import Meeting Model
Meeting = require('../models/meetingModel.js')

//For creating new meeting
exports.add = function(req, res) {
    var meeting = new Meeting();
    meeting.group_id = req.body.group_id // String, required
    meeting.contact_id = req.body.contact_id;
    meeting.owner_id = req.body.owner_id;
    meeting.title = req.body.title;
    meeting.address_street = req.body.address_street;
    meeting.address_city = req.body.address_city;
    meeting.address_state = req.body.address_state;
    meeting.address_zip = req.body.address_zip;
    meeting_time = req.body.meeting_time;

    //Save and check error
    meeting.save(function(err) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err,
            });

        else res.json({
            status: "success",
            status: 201,
            message: "New Meeting Added!",
            data: meeting
        });
    });
};

// Update Meeting by Object Id
exports.update = function(req, res) {
    Meeting.findById(req.params._id, function(err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err
            });
        meeting.group_id = req.body.group_id // String, required
        meeting.contact_id = req.body.contact_id;
        meeting.owner_id = req.body.owner_id;
        meeting.title = req.body.title;
        meeting.address_street = req.body.address_street;
        meeting.address_city = req.body.address_city;
        meeting.address_state = req.body.address_state;
        meeting.address_zip = req.body.address_zip;
        meeting_time = req.body.meeting_time;
        //save and check errors
        meeting.save(function(err) {
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

// Delete Meeting by Object Id
exports.delete = function(req, res) {
    Meeting.deleteOne({
        _id: req.params._id
    }, function(err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Meeting Deleted by Object Id'
        });
    });
};