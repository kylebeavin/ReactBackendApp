import { Date, Document } from 'mongoose';

export default interface IGroup extends Document {
    address_city:string
    address_state:string
    address_street:string
    address_zip:string
    dba:string //doing business as name
    ein:string
    email:string
    is_active:boolean
    launch_date:Date
    legal_company:string
    name:string
    phone:string
    region:string
    signing_date:Date
    tax_rate:string
    territory_zips:Array<string>
    time_zone:string
    webpage:string

}