import {NextFunction, Request, Response} from 'express'
import Invoice from '../models/invoiceModel'

//for queries
export const view = async(req:Request, res:Response)=>{
    try{
    let allGroups = await Invoice.find(req.body).exec()
    if(allGroups){
        return res.status(200).json({
            status: 200,
            message: "Working",
            data: allGroups
        })
    
    }
    }
catch(err){
    return res.status(500).json({
        status: "error",
        message: err.stack,
    })
}

}

//For creating new invoice

export const add = async function(req:Request, res:Response) {
    try {
        var invoice = new Invoice();
        invoice.account_id = req.body.account_id;
        invoice.charges = req.body.charges;
        invoice.contact_id = req.body.contact_id;
        invoice.group_id = req.body.group_id;
        invoice.invoice_date = req.body.invoice_date;
        invoice.is_active = req.body.is_active;
        invoice.purchase_order = req.body.purchase_order;
        invoice.smash_id = req.body.smash_id;
        invoice.subtotal = req.body.subtotal;
        invoice.tax = req.body.tax;
        invoice.total = req.body.total;
        invoice.type = req.body.type;


        //Save and check error
        let newInvoice = await invoice.save()
        if (newInvoice) {
            res.status(201).json({
                status: 201,
                
                message: "New invoice created!",
            })
        } else {
            res.json( {message:"Failed to create an invoice"})
        }

    } catch (err) {
        res.json({ message: err.message })
    }
};

//update invoice by object id
export const update = async function(req:Request, res:Response) {
    try {
        const data = {...req.body}
        let updatedGroup = await Invoice.findByIdAndUpdate(req.body._id, data,{new:true, useFindAndModify:false})

        
            if (updatedGroup) {
                res.status(200).json({
                    status: 200,
                    message: "Invoice Updated Successfully",
                    data: updatedGroup
                })
            } else {
                res.status(400).json({ message: 'Failed to update', status: 400 })
            }
        } 
     catch (err) {
        res.status(400).json({ message: err.message })
    }
};

//delete invoice 

export const remove = async function (req:Request, res:Response) {
    try {
        let invoice = await Invoice.findOne({ _id: req.body._id }).exec()
        if (invoice) {
            invoice.account_id = invoice.account_id;
            invoice.charges = invoice.charges;
            invoice.contact_id = invoice.contact_id;
            invoice.group_id = invoice.group_id;
            invoice.invoice_date = invoice.invoice_date;
            invoice.is_active = false;
            invoice.purchase_order = invoice.purchase_order;
            invoice.smash_id = invoice.smash_id;
            invoice.subtotal = invoice.subtotal;
            invoice.tax = invoice.tax;
            invoice.total = invoice.total;
            invoice.type = invoice.type;
            if (invoice) {
                res.status(200).json({
                    status: 200,
                   
                    message: "Invoice deactivated Successfully",
                    data: invoice
                })
            }
        } else {
            res.json({ message: 'Invoice not found' })
        }
    } catch (err) {
        res.json({ message: err.message })
    }
};