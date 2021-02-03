"use strict";
exports.__esModule = true;
exports.createCalendarDates = void 0;
var date_fns_1 = require("date-fns");
var createCalendarDates = function (startDate, endDate, servicePer, service_days) {
    if (servicePer.includes('month')) {
        for (var day in service_days) {
            createMonthlyServiceDays(startDate, endDate, day);
        }
    }
};
exports.createCalendarDates = createCalendarDates;
var createMonthlyServiceDays = function (startDate, endDate, day) {
    var daysOfWeek = { mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6, sun: 7 };
    //start date of agreement
    var start_date = new Date(startDate);
    //end date of agreement
    var end_date = new Date(endDate);
    //getting dates of each month in the interval
    var datesForFirstOfEachMonth = date_fns_1.eachMonthOfInterval({ start: start_date, end: end_date });
    //console.log(datesForFirstOfEachMonth)
    //first date of each month of day of service
    var calendarDates = datesForFirstOfEachMonth.map(function (curdate) {
        var currentDay = date_fns_1.getISODay(curdate);
        var scheduledDay = daysOfWeek[day];
        var diff = 0;
        if (currentDay < scheduledDay) {
            diff = scheduledDay - currentDay;
        }
        else {
            diff = 7 - currentDay + scheduledDay;
        }
        return date_fns_1.addDays(curdate, diff);
    });
    return calendarDates;
};
var createWeeklyServiceDays = function (startDate, endDate, day) {
    var daysOfWeek = { mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6, sun: 0 };
    var start_date = new Date(startDate);
    var end_date = new Date(endDate);
    var startWeek = daysOfWeek[day];
    console.log(startWeek);
    var datesForEveryWeek = date_fns_1.eachWeekOfInterval({ start: start_date, end: end_date });
    console.log(datesForEveryWeek);
    var calendarDates = datesForEveryWeek.map(function (curdate) {
        var currentDay = date_fns_1.getISODay(curdate);
        var scheduledDay = daysOfWeek[day];
        var diff = 0;
        if (currentDay < scheduledDay) {
            diff = scheduledDay - currentDay;
        }
        else {
            diff = 7 - currentDay + scheduledDay;
        }
        return date_fns_1.addDays(curdate, diff);
    });
    return calendarDates;
};
console.log(createWeeklyServiceDays('2021-03-11', '2022-02-11', 'wed'));
