// orderController.js
// Import Order Model
const Order = require('../models/orderModel.js');
// Import order validator
const validateOrderInput = require('../validation/orderValidator')
console.log(validateOrderInput);
// For queries
exports.view = function (req, res) {
    Order.find(req.body, null, {
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

//For creating new order
exports.add = async function (req, res, next) {
    try {
        const order = new Order();
        order.account_id = req.body.account_id;
        order.agreement_id = req.body.agreement_id;
        order.demand_rate = req.body.demand_rate;
        order.end_date = req.body.end_date;
        order.group_id = req.body.group_id;
        order.is_demo = req.body.is_demo;
        order.is_recurring = req.body.is_recurring;
        order.monthly_rate = req.body.monthly_rate;
        order.notes = req.body.notes;
        order.services = req.body.services;
        order.service_days = req.body.service_days;
        order.service_frequency = req.body.service_frequency;
        order.service_per = req.body.service_per;
        order.start_date = req.body.start_date;
        order.term_date = req.body.term_date;
        order.url = req.body.url;
        //Save and check error
        let newOrder = await order.save()
        if (newOrder) {
            res.json({
                status: "success",
                status: 201,
                message: "New order created!",
            })
        } else {
            res.json({ status: err.message })
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

// Update order by Object id
exports.update = async function (req, res) {
    try {
        let order = await Order.findById(req.params._id).exec()
        if (order) {
            order._id = req.body._id ? req.body._id : order._id;
            order.account_id = req.body.account_id ? req.body.account_id : order.account_id;
            order.agreement_id = req.body.agreement_id ? req.body.agreement_id : order.agreement_id;
            order.demand_rate = req.body.demand_rate ? req.body.demand_rate : order.demand_rate;
            order.end_date = req.body.end_date ? req.body.end_date : order.end_date;
            order.group_id = req.body.group_id ? req.body.group_id : order.group_id;
            order.is_active = req.body.is_active ? req.body.is_active : order.is_active;
            order.is_demo = req.body.is_demo ? req.body.is_demo : order.is_demo;
            order.is_recurring = req.body.is_recurring ? req.body.is_recurring : order.is_recurring;
            order.monthly_rate = req.body.monthly_rate ? req.body.monthly_rate : order.monthly_rate;
            order.notes = req.body.notes ? req.body.notes : order.notes;
            order.services = req.body.services ? req.body.services : order.services;
            order.service_days = req.body.service_days ? req.body.service_days : order.service_days;
            order.service_frequency = req.body.service_frequency ? req.body.service_frequency : order.service_frequency;
            order.service_per = req.body.service_per ? req.body.service_per : order.service_per;
            order.start_date = req.body.start_date ? req.body.start_date : order.start_date;
            order.term_date = req.body.term_date ? req.body.term_date : order.term_date;
            order.url = req.body.url ? req.body.url : order.url;
            let updatedOrder = await order.save()
            if (updatedOrder) {
                res.json({
                    status: "success",
                    status: 204,
                    message: "Order Updated Successfully",
                    data: updatedOrder
                })
            } else {
                res.json({ message: 'Failed to update', status: 400 })
            }
        } else {
            res.json({ message: 'Order not found' })
        }
    } catch (err) {
        res.json({ message: err.message })
    }
};

// Delete Order by _id
exports.delete = async function (req, res) {
    try {
        let order = await Order.findOne({ _id: req.body._id }).exec()
        if (order) {
            order._id = order._id;
            order.account_id = order.account_id;
            order.agreement_id = order.agreement_id;
            order.demand_rate = order.demand_rate;
            order.end_date = order.end_date;
            order.group_id = order.group_id;
            order.is_active = false
            order.is_demo = order.is_demo;
            order.is_recurring = order.is_recurring;
            order.monthly_rate = order.monthly_rate;
            order.notes = order.notes;
            order.services = order.services;
            order.service_days = order.service_days;
            order.service_frequency = order.service_frequency;
            order.service_per = order.service_per;
            order.start_date = order.start_date;
            order.term_date = order.term_date;
            order.url = req.body.url ? req.body.url : order.url;
            if (order) {
                res.json({
                    status: "success",
                    status: 204,
                    message: "Order deactivated Successfully",
                    data: order
                })
            }
        } else {
            res.json({ message: 'Order not found' })
        }
    } catch (err) {
        res.json({ message: err.message })
    }
};