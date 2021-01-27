import { Document } from 'mongoose';

export default interface IAccount extends Document {
    group_id :string
    account_name:string
    owner_id:string
    owner_name:string
    contacts: Array<string>
    is_active: boolean
    stage: string
    geo_location: string
    address_street: string
    address_city: string
    address_state: string
    address_zip: string
    //generic account domain
    email: string
    demo:Date
    //when lead becomes account
    conversion:Date
    hauling_contract:boolean
    hauling_expiration: Date
    national:boolean
    referral:boolean
    referral_group_id:string
    notes:string


  }