var dataLoggedUser = JSON.parse(localStorage.getItem("loggedUser")) || {};

/*
if (dataLoggedUser.userName) {
    document.getElementById('hello').innerHTML = "Hello " + dataLoggedUser.userName;
} else {
    document.getElementById('hello').innerHTML = '';
}
*/
document.getElementById('hello').innerHTML = dataLoggedUser.userName ? "Hello " + dataLoggedUser.userName : '';

const regular_houre = 9;
function diff_hours(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff))
}
const shifts = Array.from(new Array(8)).map(_ => {
    const date = new Date();
    const dayInMoth = Math.ceil(Math.random() * 27);
    const startDate = new Date(date.getFullYear(), date.getMonth(), dayInMoth, 10);
    const endDate = new Date(date.getFullYear(), date.getMonth(), dayInMoth, 20);
    return {
        totalHours: diff_hours(endDate, startDate), //מספר השעות במשמרת
        regularHours: Math.min(regular_houre, diff_hours(endDate, startDate)), //שעות רגילות
        extraHours: Math.max(0, diff_hours(endDate, startDate) - regular_houre), //שעות נוספות
        startDate: startDate, //תחילת משמרת
        endDate: endDate, //סיום משמרת
    }
});
console.log(shifts);

document.getElementById('totalHours').innerHTML = 'Total Hours ' + shifts.reduce(function (acc, curr) {
    return acc + curr.totalHours;
}, 0);

//Feature #4: Expenses management
var username = dataLoggedUser.userName;
const expensesKey = `${username}Expenses`;
var ExpensesKey = JSON.parse(localStorage.getItem(expensesKey)) || [];
var totalExpenses = 0;
for (var i = 0; i < ExpensesKey.length; i++) {
    totalExpenses += Number(ExpensesKey[i].sum);
}
document.getElementById('totalExpenses').innerHTML = 'Total Expenses ' + totalExpenses;
