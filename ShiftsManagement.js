var dataLoggedUser = JSON.parse(localStorage.getItem("loggedUser")) || {};
var username = dataLoggedUser.userName;
const shiftsKey = `${username}Shifts`;
var ShiftsKey = JSON.parse(localStorage.getItem(shiftsKey)) || [];
const shiftsDataKey = `${username}ShiftsData`;
var ShiftsDataKey = JSON.parse(localStorage.getItem(shiftsDataKey)) || {};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('regular').innerHTML = "Regular hours: " + ShiftsDataKey.regular;
    document.getElementById('extra').innerHTML = "Extra hours: " + ShiftsDataKey.extra;
    document.getElementById('total').innerHTML = ShiftsDataKey.total;
});

document.getElementById("Submit").addEventListener("click", function (event) {
    event.preventDefault();

    var start = new Date(document.getElementById('start').value);
    var end = new Date(document.getElementById('end').value);
    var data = {
        start: start,
        end: end,
        total: (end - start) / (1000 * 60 * 60),
    };
    ShiftsKey.push(data);
    localStorage.setItem(shiftsKey, JSON.stringify(ShiftsKey));

    var totalHours = 0;
    for (var i = 0; i < ShiftsKey.length; i++) {
        totalHours = totalHours + ShiftsKey[i].total;
    };
    document.getElementById('total').innerHTML = totalHours;

    //חישוב שעות נוספות לפי 9+ שעות ביום עבודה
    var regularHours = 0;
    var extraHours = 0;
    for (var i = 0; i < ShiftsKey.length; i++) {
        var dailyHours = ShiftsKey[i].total;
        if (dailyHours > 9) {
            extraHours = extraHours + (dailyHours - 9);
            regularHours = regularHours + 9;
        } else {
            regularHours = regularHours + dailyHours;
        }
    };

    var sum = {
        regular: regularHours,
        extra: extraHours,
        total: totalHours
    }
    localStorage.setItem(shiftsDataKey, JSON.stringify(sum));
    document.getElementById('regular').innerHTML = "Regular hours: " + regularHours;
    document.getElementById('extra').innerHTML = "Extra hours: " + extraHours;
});

document.getElementById("regularI").addEventListener("mouseover", function () {
    regularTooltip.style.display = "block"
});

//צריך להוסיף הערות לשעות רגילות ולשעות נוספות
//צריך לעשות שהטבלה תתעדכן לפי המערך דיווח שעות