import { Document } from 'mongoose';

export default interface IInvoice extends Document {
    account_id: string
    charges:string
    contact_id: string
    group_id:string
    invoice_date:Date
    is_active:boolean
    purchase_order:string
    smash_id:string
    subtotal:string
    tax:string
    total:string
    type:Array<string>



  }