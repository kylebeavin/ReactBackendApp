//meetingController.js
//Import Meeting Model
Meeting = require('../models/meetingModel.js')

// For queries
exports.view = function(req, res) {
    Meeting.find(req.body, null, {
            sort: {
                title: 1
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

//For creating new meeting
exports.add = async function(req, res) {
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
            res.status(304).json({ status: 'something went wrong' })
        }

    } catch (err) {
        res.json({ message: err.message })
    }

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
        meeting.is_active = req.body.is_active;
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

// Update order by Object id
exports.update = async function(req, res) {
    try {
        let meeting = await Order.findById(req.params._id).exec()
        if (meeting) {
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
            meeting.is_active = req.body.is_active;
            let updatedOrder = await orderToUpdate.save()
            if (updatedOrder) {
                res.status(204).json({
                    status: "success",
                    status: 204,
                    message: "Order Updated Successfully",
                    data: updatedOrder
                })
            } else {
                res.status(400).json({ message: 'Failed to update', status: 400 })
            }
        } else {
            res.status(400).json({ message: 'Order not found' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }


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