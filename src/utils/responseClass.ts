export class HttpResponse {
    status : number;
    message:string;
    type:string;
    data: object | object[] |null
    constructor(status:number, type:string, message:string, data:object|object[]|null){
        this.status = status
        this.message = message
        this.data = data
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