import { Document } from 'mongoose';

export default interface IUser extends Document {
    display_name: string
    email: string
    password:string
    first_name: string
    last_name:string
    group_id :string
    image:string
    is_active:boolean
    role:string
    token:string|null


  }