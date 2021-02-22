import { Document } from 'mongoose';

export default interface IMeeting extends Document {
    account_id: string
    address_city:string
    address_state:string
    address_street:string
    address_zip:string
    contact_id:string
    group_id:string
    is_active:boolean
    meeting_time:Date
    owner_id:string
    title:string//meeting place e.g starbucks
}