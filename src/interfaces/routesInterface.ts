import { Date, Document } from 'mongoose';

export default interface IRoutes extends Document {
    group_id: string
    truck_id: string
    is_active: boolean
    route_status: string
    start_location: string
    driver: string
    truck_vin: string
    service_stop: Array<string>
    time: Date
    notes: Array<string>
}