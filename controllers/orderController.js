//orderController.js
//Import Order Model
const Order = require('../models/orderModel.js')
//import order validator
const validateOrderInput = require('../validation/orderValidator')
// For queries
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

//For creating new order
exports.add = async function(req, res) {
    try {
        //validate the order input
        const {errors, isValid} = validateOrderInput(req.body)
        //check validation
        if(!isValid){
            res.status(400).json(errors)
        }
        const order = new Order();
        order.account_id = req.body.account_id; // String, required
        order.group_id = req.body.group_id; // String, required
        order.is_recurring = req.body.is_recurring; // String, required
        order.service_date = req.body.service_date; // Bool, default: true
        order.created = req.body.created; // String, required
        order.is_active = req.body.is_active; // String, required


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
        res.json({ message: err.message })
    }

};

// Update order by Object id
exports.update = async function(req, res) {
    try {
        let order = await Order.findById(req.params._id).exec()
        if (order) {
            order.account_id = req.body.account_id
            order.group_id = req.body.group_id
            order.is_recurring = req.body.is_recurring
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

};