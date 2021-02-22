export class HttpResponse {
    status : number;
    message:string;
    type:string;
    data: object | object[] |null
    constructor(status:number, type:string, message:string, data:object|object[]|null=null){
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

    static sendErrorMessage(message:string){
        return {
            status:500,
            type:'error',
            message:message,
            data:null
        }
    }

    static successResponse(status:number, message:string, data:object|object[]){
        return{
            status:status,
            type:'success',
            message:message,
            data:data
        }
    }
    

}