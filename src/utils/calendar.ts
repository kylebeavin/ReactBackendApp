interface WeekDays {
    [key:string]:number
    
}

export const createCalendarDates = (startDate:string, endDate:string, servicPer:Array<string>, service_days:Array<string>)=>{
    let start_date = new Date(startDate)



}

const createMonthlyServiceDays = (startDate:string, endDate:string,month:string, day:string)=>{
    let daysOfWeek:WeekDays = {sun:0, mon:1, tue:2, wed:3, thu:4, fri:5, sat:6}
    let start_date = new Date(startDate)
    let end_date = new Date(endDate)
    let startFullYear = start_date.getFullYear()
    let startMonth = start_date.getMonth()
    let startDay = start_date.getDay()
    let startNumber = start_date.getDate()
    let scheduledStart = start_date
    if(startDay < daysOfWeek[day]){
         let difference = daysOfWeek[day]-startDay
         scheduledStart = start_date - difference + 7
    }
    let scheduledDates = []
    while(start_date <= end_date){

        
    }
    

}