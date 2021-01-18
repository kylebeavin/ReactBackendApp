// orderController.js
// Import Order Model
const Order = require('../models/orderModel.js');
// Import order validator
const validateOrderInput = require('../validation/orderValidator')
console.log(validateOrderInput);
// For queries
exports.view = function(req, res) {
    exports.view = function(req, res) {
        Order.find(req.body, null, {
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
}

//For creating new order
exports.add = async function(req, res, next) {
    try {
        //validate the order input
        console.log('order validate', req.body)
        const { errors, isValid } = validateOrderInput.validateOrderInput(req.body)

        //check validation
        if (!isValid) {

            res.status(400).json(errors)
        }
        const order = new Order();
        order.agreement_id = req.body.agreement_id; // String, required
        order.account_id = req.body.account_id; // String, required
        order.group_id = req.body.group_id; // String, required
        order.is_recurring = req.body.is_recurring; // String, required
        order.services = req.body.services; // Bool, default: true
        order.service_frequency = req.body.service_frequency; // Bool, default: true
        order.service_per = req.body.service_per; // Bool, default: true
        order.service_days = req.body.service_days; // Bool, default: true
        order.monthly_rate = req.body.monthly_rate; // Bool, default: true
        order.demand_rate = req.body.demand_rate; // Bool, default: true
        order.term_date = req.body.term_date; // Bool, default: true
        order.start_date = req.body.start_date; // Bool, default: true
        order.end_date = req.body.end_date; // Bool, default: true
        if (req.body.is_active) {
            order.is_active = req.body.is_active;
        } // String, required
        order.notes = req.body.notes; // String, required
        order.url = req.body.url; // String, required
        //Save and check error
        let newOrder = await order.save()
        if (newOrder) {
            res.json({
                status: "success",
                status: 201,
                message: "New order created!",
            })
        } else {
            res.status(304).json({ status: 'something went wrong' })
        }

    } catch (err) {
        console.log(err.message)

    }
};

// Update order by Object id
exports.update = async function(req, res) {
    try {
        let order = await Order.findById(req.params._id).exec()
        if (order) {
            order._id = req.body._id ? req.body._id : order._id;
            order.agreement_id = req.body.agreement_id; // String, required
            order.account_id = req.body.account_id; // String, required
            order.group_id = req.body.group_id; // String, required
            order.is_recurring = req.body.is_recurring; // String, required
            order.services = req.body.services; // Bool, default: true
            order.service_frequency = req.body.service_frequency; // Bool, default: true
            order.service_per = req.body.service_per; // Bool, default: true
            order.service_days = req.body.service_days; // Bool, default: true
            order.monthly_rate = req.body.monthly_rate; // Bool, default: true
            order.demand_rate = req.body.demand_rate; // Bool, default: true
            order.term_date = req.body.term_date; // Bool, default: true
            order.start_date = req.body.start_date; // Bool, default: true
            order.end_date = req.body.end_date; // Bool, default: true
            order.is_demo = req.body.is_demo; // String, required
            order.is_active = req.body.is_active; // String, required
            order.notes = req.body.notes != null ? req.body.token : null; // String, required
            order.url = req.body.url != null ? req.body.token : null; // String, required
            let updatedOrder = await order.save()
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

// Delete Order by Object Id
exports.delete = async function(req, res) {
    try {
        let deleteOrder = await Order.deleteOne({ _id: req.params._id }).exec()
        if (deleteOrder) {
            res.status(204).json({
                status: "success",
                message: 'Order successfully deleted'
            })
        } else {
            res.status(400).json({ message: 'Failed to delete' })
        }
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' })
    }

}