//meetingController.js
//Import Meeting Model
Meeting = require('../models/meetingModel.js')

//For server
exports.viewAll = function (req, res) {
    Meeting.get(function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 204,
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: "Got Meetings Successfully!",
            data: meeting
        });
    });
};

//For creating new meeting
exports.add = function (req, res) {
    var meeting = new Meeting();
    meeting.account_id = req.body.account_id // String, required
    meeting.group_id = req.body.group_id // String, required
    meeting.contact_id = req.body.contact_id;
    meeting.owner_id = req.body.owner_id;
    meeting.location_name = req.body.location_name;
    meeting.address_street = req.body.address_street;
    meeting.address_city = req.body.address_city;
    meeting.address_state = req.body.address_state;
    meeting.address_zip = req.body.address_zip;
    meeting_time = req.body.meeting_time;

    //Save and check error
    meeting.save(function (err) {
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

// View Meeting by mongo object id
exports.viewMeetingById = function (req, res) {
    Meeting.findById(req.params._id, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Meeting Details by Object Id',
            data: meeting
        });
    });
};

// View Meetings by group
exports.viewMeetingByGroup = function (req, res) {
    Meeting.find({ group_id: req.params.group_id }, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got meetings by group',
            data: meeting
        });
    });
};

// View Meeting by name
exports.viewMeetingByName = function (req, res) {
    Meeting.find({ name: req.params.name }, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got meetings by name',
            data: meeting
        });
    });
};

// View Meetings by owner Id
exports.viewMeetingByOwnerId = function (req, res) {
    Meeting.find({ owner_id: req.params.owner_id }, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got meetings associated with owner id',
            data: meeting
        });
    });
};

// View Meetings by is_activate status
exports.viewMeetingByIsActive = function (req, res) {
    Meeting.find({ is_active: req.params.is_active }, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got meetings by active status',
            data: meeting
        });
    });
};

// View Meetings by sales stage
exports.viewMeetingByStage = function (req, res) {
    Meeting.find({ stage: req.params.stage }, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got meetings by sales stage',
            data: meeting
        });
    });
};

// View Meetings by street
exports.viewMeetingByStreet = function (req, res) {
    Meeting.find({ address_street: req.params.address_street }, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got meetings by Street',
            data: meeting
        });
    });
};

// View Meetings by City
exports.viewMeetingByCity = function (req, res) {
    Meeting.find({ address_city: req.params.address_city }, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got meetings by City',
            data: meeting
        });
    });
};

// View Meetings by State
exports.viewMeetingByState = function (req, res) {
    Meeting.find({ address_state: req.params.address_state }, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got meetings by State',
            data: meeting
        });
    });
};

// View Meetings by Zip
exports.viewMeetingByZip = function (req, res) {
    Meeting.find({ address_zip: req.params.address_zip }, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got meetings by Zip',
            data: meeting
        });
    });
};

// View Meetings by Email
exports.viewMeetingByEmail = function (req, res) {
    Meeting.find({ email: req.params.email }, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got meetings by Email',
            data: meeting
        });
    });
};

// View Meetings by Creation Date
exports.viewMeetingByCreation = function (req, res) {
    Meeting.find({ created: req.params.created }, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got meetings by Creation Date',
            data: meeting
        });
    });
};


// View Meetings by Demo Date
exports.viewMeetingByDemoDate = function (req, res) {
    Meeting.find({ demo: req.params.demo }, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got meetings by Demo Date',
            data: meeting
        });
    });
};

// View Meetings by Conversion Date
exports.viewMeetingByConversionDate = function (req, res) {
    Meeting.find({ conversion: req.params.conversion }, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        else res.json({
            status: "success",
            status: 200,
            message: 'Got meetings by Conversion Date',
            data: meeting
        });
    });
};

// Update Meeting by Object Id
exports.updateMeetingById = function (req, res) {
    Meeting.findById(req.params._id, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err
            });
        meeting.account_id = req.body.account_id // String, required
        meeting.group_id = req.body.group_id // String, required
        meeting.contact_id = req.body.contact_id;
        meeting.owner_id = req.body.owner_id;
        meeting.location_name = req.body.location_name;
        meeting.address_street = req.body.address_street;
        meeting.address_city = req.body.address_city;
        meeting.address_state = req.body.address_state;
        meeting.address_zip = req.body.address_zip;
        meeting_time = req.body.meeting_time;
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

// Update Meeting
exports.updateMeetingByGroup = function (req, res) {
    Meeting.find(req.params.group_id, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err
            });
        meeting.account_id = req.body.account_id // String, required
        meeting.group_id = req.body.group_id // String, required
        meeting.contact_id = req.body.contact_id;
        meeting.owner_id = req.body.owner_id;
        meeting.location_name = req.body.location_name;
        meeting.address_street = req.body.address_street;
        meeting.address_city = req.body.address_city;
        meeting.address_state = req.body.address_state;
        meeting.address_zip = req.body.address_zip;
        meeting_time = req.body.meeting_time;
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
                message: "All Meetings in Group Updated Successfully",
                data: meeting
            });
        });
    });
};
// Update Meeting by name
exports.updateMeetingByName = function (req, res) {
    Meeting.find(req.params.name, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 204, // 
                message: err
            });
        meeting.account_id = req.body.account_id // String, required
        meeting.group_id = req.body.group_id // String, required
        meeting.contact_id = req.body.contact_id;
        meeting.owner_id = req.body.owner_id;
        meeting.location_name = req.body.location_name;
        meeting.address_street = req.body.address_street;
        meeting.address_city = req.body.address_city;
        meeting.address_state = req.body.address_state;
        meeting.address_zip = req.body.address_zip;
        meeting_time = req.body.meeting_time;
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
                message: "Meetings Updated Successfully by Name",
                data: meeting
            });
        });
    });
};

// Update all Meetings by Owner Id
exports.updateMeetingByOwnerId = function (req, res) {
    Meeting.find(req.params.owner_id, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err
            });
        meeting.account_id = req.body.account_id // String, required
        meeting.group_id = req.body.group_id // String, required
        meeting.contact_id = req.body.contact_id;
        meeting.owner_id = req.body.owner_id;
        meeting.location_name = req.body.location_name;
        meeting.address_street = req.body.address_street;
        meeting.address_city = req.body.address_city;
        meeting.address_state = req.body.address_state;
        meeting.address_zip = req.body.address_zip;
        meeting_time = req.body.meeting_time;
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
                message: "All Meetings for User Updated Successfully",
                data: meeting
            });
        });
    });
};

// Update all Meetings by Is Active Status
exports.updateMeetingByIsActive = function (req, res) {
    Meeting.find(req.params.is_active, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err
            });
        meeting.account_id = req.body.account_id // String, required
        meeting.group_id = req.body.group_id // String, required
        meeting.contact_id = req.body.contact_id;
        meeting.owner_id = req.body.owner_id;
        meeting.location_name = req.body.location_name;
        meeting.address_street = req.body.address_street;
        meeting.address_city = req.body.address_city;
        meeting.address_state = req.body.address_state;
        meeting.address_zip = req.body.address_zip;
        meeting_time = req.body.meeting_time;
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
                message: "All Meetings for Status Updated Successfully",
                data: meeting
            });
        });
    });
};

// Update all Meetings by Street
exports.updateMeetingByStreet = function (req, res) {
    Meeting.find(req.params.address_street, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err
            });
        meeting.account_id = req.body.account_id // String, required
        meeting.group_id = req.body.group_id // String, required
        meeting.contact_id = req.body.contact_id;
        meeting.owner_id = req.body.owner_id;
        meeting.location_name = req.body.location_name;
        meeting.address_street = req.body.address_street;
        meeting.address_city = req.body.address_city;
        meeting.address_state = req.body.address_state;
        meeting.address_zip = req.body.address_zip;
        meeting_time = req.body.meeting_time;
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
                message: "All Meetings on Street Address Updated Successfully",
                data: meeting
            });
        });
    });
};

// Update all Meetings by City
exports.updateMeetingByCity = function (req, res) {
    Meeting.find(req.params.address_city, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err
            });
        meeting.account_id = req.body.account_id // String, required
        meeting.group_id = req.body.group_id // String, required
        meeting.contact_id = req.body.contact_id;
        meeting.owner_id = req.body.owner_id;
        meeting.location_name = req.body.location_name;
        meeting.address_street = req.body.address_street;
        meeting.address_city = req.body.address_city;
        meeting.address_state = req.body.address_state;
        meeting.address_zip = req.body.address_zip;
        meeting_time = req.body.meeting_time;
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
                message: "All Meetings in City Updated Successfully",
                data: meeting
            });
        });
    });
};

// Update all Meetings by City
exports.updateMeetingByCity = function (req, res) {
    Meeting.find(req.params.address_city, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err
            });
        meeting.account_id = req.body.account_id // String, required
        meeting.group_id = req.body.group_id // String, required
        meeting.contact_id = req.body.contact_id;
        meeting.owner_id = req.body.owner_id;
        meeting.location_name = req.body.location_name;
        meeting.address_street = req.body.address_street;
        meeting.address_city = req.body.address_city;
        meeting.address_state = req.body.address_state;
        meeting.address_zip = req.body.address_zip;
        meeting_time = req.body.meeting_time;
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
                message: "All Meetings in City Updated Successfully",
                data: meeting
            });
        });
    });
};

// Update all Meetings by State
exports.updateMeetingByState = function (req, res) {
    Meeting.find(req.params.address_state, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err
            });
        meeting.account_id = req.body.account_id // String, required
        meeting.group_id = req.body.group_id // String, required
        meeting.contact_id = req.body.contact_id;
        meeting.owner_id = req.body.owner_id;
        meeting.location_name = req.body.location_name;
        meeting.address_street = req.body.address_street;
        meeting.address_city = req.body.address_city;
        meeting.address_state = req.body.address_state;
        meeting.address_zip = req.body.address_zip;
        meeting_time = req.body.meeting_time;
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
                message: "All Meetings in State Updated Successfully",
                data: meeting
            });
        });
    });
};

// Update all Meetings by Zip
exports.updateMeetingByZip = function (req, res) {
    Meeting.find(req.params.address_zip, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err
            });
        meeting.account_id = req.body.account_id // String, required
        meeting.group_id = req.body.group_id // String, required
        meeting.contact_id = req.body.contact_id;
        meeting.owner_id = req.body.owner_id;
        meeting.location_name = req.body.location_name;
        meeting.address_street = req.body.address_street;
        meeting.address_city = req.body.address_city;
        meeting.address_state = req.body.address_state;
        meeting.address_zip = req.body.address_zip;
        meeting_time = req.body.meeting_time;
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
                message: "All Meetings in Zip Updated Successfully",
                data: meeting
            });
        });
    });
};

// Update all Meetings by Creation
exports.updateMeetingByCreation = function (req, res) {
    Meeting.find(req.params.created, function (err, meeting) {
        if (err)
            res.json({
                status: "error",
                status: 304, // 
                message: err
            });
        meeting.account_id = req.body.account_id // String, required
        meeting.group_id = req.body.group_id // String, required
        meeting.contact_id = req.body.contact_id;
        meeting.owner_id = req.body.owner_id;
        meeting.location_name = req.body.location_name;
        meeting.address_street = req.body.address_street;
        meeting.address_city = req.body.address_city;
        meeting.address_state = req.body.address_state;
        meeting.address_zip = req.body.address_zip;
        meeting_time = req.body.meeting_time;
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
                message: "All Meetings by Creation Date Updated Successfully",
                data: meeting
            });
        });
    });
};


// Delete Meeting by Object Id
exports.deleteMeetingById = function (req, res) {
    Meeting.deleteOne({
        _id: req.params._id
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Meeting Deleted by Object Id'
        });
    });
};

// Delete Meeting by Group Id
exports.deleteMeetingByGroup = function (req, res) {
    Meeting.delete({
        group_id: req.params.group_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Meeting Deleted by Group Id'
        });
    });
};

// Delete Meeting by Owner_Id
exports.deleteMeetingByOwnerId = function (req, res) {
    Meeting.delete({
        owner_id: req.params.owner_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Meeting Deleted by Owner Id'
        });
    });
};

// Delete Meeting by Is Active Status
exports.deleteMeetingByIsActive = function (req, res) {
    Meeting.delete({
        is_active: req.params.is_active
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Meeting Deleted by Active Status'
        });
    });
};



// Delete Meeting by Street
exports.deleteMeetingByStreet = function (req, res) {
    Meeting.delete({
        address_street: req.params.address_street
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Meeting Deleted by Street Address'
        });
    });
};

// Delete Meeting by City
exports.deleteMeetingByCity = function (req, res) {
    Meeting.delete({
        address_city: req.params.address_city
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Meeting Deleted by City'
        });
    });
};

// Delete Meeting by State
exports.deleteMeetingByState = function (req, res) {
    Meeting.delete({
        address_state: req.params.address_state
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Meeting Deleted by State'
        });
    });
};

// Delete Meeting by Zip
exports.deleteMeetingByZip = function (req, res) {
    Meeting.delete({
        address_zip: req.params.address_zip
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Meeting Deleted by Zip'
        });
    });
};

// Delete Meeting by Creation Date
exports.deleteMeetingByCreation = function (req, res) {
    Meeting.delete({
        created: req.params.created
    }, function (err, contact) {
        if (err)
            res.send(err)
        else res.json({
            status: "success",
            message: 'Meeting Deleted by Creation'
        });
    });
};
