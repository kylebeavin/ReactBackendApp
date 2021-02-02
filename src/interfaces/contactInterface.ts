import { Document } from 'mongoose';

export default interface IContact extends Document {
    account_id:string
    email:string
    first_name:string
    last_name:string
    is_active:boolean
    method:Array<string>
    owner_id:string
    phone:string
    type:Array<string>

    
    


  }