export class HttpResponse {
    status : number;
    message:string;
    type:string;
    data: string | null
    constructor(status:number, type:string, message:string, data:string|null){
        this.status = status
        this.message = message
        this.data = JSON.stringify(data)
        this.type = type
    }
    
    sendResponse(){
        return {
            status:this.status,
            type:this.type,
            message:this.message,
            data:this.data
            
        }
    }

}