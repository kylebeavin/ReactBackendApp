import { Document } from 'mongoose';

export default interface IOrder extends Document {
  account_id:string
  agreement_id:string
  demand_rate:string
  end_date:Date
  group_id:string
  is_active:boolean
  is_demo:boolean
  is_recurring:boolean
  monthly_rate:string
  notes:Array<string>
  services:string
  service_days:Array<string>
  service_frequency:string
  service_per:Array<string>
  start_date:Date
  term_date:string
  url:Array<string>

  }