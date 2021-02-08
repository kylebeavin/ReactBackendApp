import { Date, Document } from 'mongoose';

export default interface ITruck extends Document {
    body_subtype: string
    body_type:string
    color:string
    documents:Array<string>
    group_id:Array<string>
    hours:string
    is_active:boolean
    license_number:string
    msrp:string
    name:string
    odo:Array<string>
    operator:string
    ownership:string
    pictures:Array<string>
    service_history:Array<string>
    service_status:Array<string>
    trim:string
    registration:string
    vehicle_make:string
    vehicle_model:string
    vehicle_type:Array<string>
    vin:string
    year:string


}