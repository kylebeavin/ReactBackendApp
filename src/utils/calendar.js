"use strict";
exports.__esModule = true;
exports.createCalendarDates = void 0;
var date_fns_1 = require("date-fns");
var createCalendarDates = function (startDate, endDate, servicPer, service_days) {
    var start_date = new Date(startDate);
};
exports.createCalendarDates = createCalendarDates;
var createMonthlyServiceDays = function (startDate, endDate, day) {
    var daysOfWeek = { mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6, sun: 7 };
    var start_date = new Date(startDate);
    var end_date = new Date(endDate);
    var startFullYear = start_date.getFullYear();
    var startMonth = start_date.getMonth();
    var startDay = start_date.getDay();
    var startNumber = start_date.getDate();
    var scheduledStart = start_date;
    var datesForFirstOfEachMonth = date_fns_1.eachMonthOfInterval({ start: start_date, end: end_date });
    console.log(datesForFirstOfEachMonth);
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
console.log(createMonthlyServiceDays('2021-03-11', '2022-02-11', 'wed'));
