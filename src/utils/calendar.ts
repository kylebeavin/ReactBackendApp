// import {addDays, eachMonthOfInterval, eachWeekOfInterval, getISODay} from 'date-fns'

// interface WeekDays {
//     [key:string]:number
    
// }

// export const createCalendarDates = (startDate:string, endDate:string, servicePer:Array<string>, service_days:Array<string>)=>{
//     if(servicePer.includes('month')){
//         for(let day in service_days){
//             createMonthlyServiceDays(startDate, endDate, day)
//         }
//     }
//     if(servicePer.includes('week')){
//         for(let day in service_days){
//             createWeeklyServiceDays(startDate, endDate, day)
//         }
//     }





// }

// const createMonthlyServiceDays = (startDate:string, endDate:string, day:string)=>{
//     let daysOfWeek:WeekDays = { mon:1, tue:2, wed:3, thu:4, fri:5, sat:6, sun:7}
//     //start date of agreement
//     let start_date = new Date(startDate)
//     //end date of agreement
//     let end_date = new Date(endDate)
//     //getting dates of each month in the interval
//     const datesForFirstOfEachMonth = eachMonthOfInterval({start:start_date, end:end_date})
//     //console.log(datesForFirstOfEachMonth)
//     //first date of each month of day of service
//     let calendarDates = datesForFirstOfEachMonth.map(curdate: Date =>{
//         let currentDay = getISODay(curdate)
//         let scheduledDay = daysOfWeek[day]
//         let diff = 0
//         if(currentDay < scheduledDay){
//             diff = scheduledDay - currentDay
//         }
//         else{
//             diff = 7-currentDay + scheduledDay
//         }
//         return addDays(curdate, diff)
//     })
//     return calendarDates
    
// }

// const createWeeklyServiceDays = (startDate:string, endDate:string, day:string)=>{
//     let daysOfWeek:WeekDays = { mon:1, tue:2, wed:3, thu:4, fri:5, sat:6, sun:0}
//     let start_date = new Date(startDate)
//     let end_date = new Date(endDate)
    
//     //date of sunday of each week
//     const datesForEveryWeek = eachWeekOfInterval({start:start_date, end:end_date})
//     console.log(datesForEveryWeek)
//     //date for paricular weekday of each week
//     let calendarDates = datesForEveryWeek.map(curdate=>{
//         let currentDay = getISODay(curdate)
//         let scheduledDay = daysOfWeek[day]
//         let diff = 0
//         if(currentDay < scheduledDay){
//             diff = scheduledDay - currentDay
//         }
//         else{
//             diff = 7-currentDay + scheduledDay
//         }
//         return addDays(curdate, diff)
//     })
//     return calendarDates

// }

// console.log(createWeeklyServiceDays('2021-03-11','2022-02-11', 'wed'))