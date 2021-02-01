import { Date, Document } from 'mongoose';

export default interface IAgreement extends Document {
    account_id: string
    demand_rate:string
    end_date:Date
    group_id:string
    is_active:boolean
    is_recurring:boolean
    monthly_rate:string
    notes:string //is notes supposed to be  a sting array or string
    owner_id:string
    services:Array<string>
    service_days: Array<string>
    service_frequency: string
    service_per:Array<string>
    start_date:Date
    term_date:Date
    url:string
}