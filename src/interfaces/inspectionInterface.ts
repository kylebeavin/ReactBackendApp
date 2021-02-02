import { Document } from 'mongoose';

export default interface IInspection extends Document {
    group_id :string
    is_active:boolean
    owner_id:string
    type:Array<string>
    truck_id:string


  }