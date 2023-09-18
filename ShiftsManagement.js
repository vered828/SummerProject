var dataLoggedUser = JSON.parse(localStorage.getItem("loggedUser")) || {};
var username = dataLoggedUser.userName;
const shiftsKey = `${username}Shifts`;
var ShiftsKey = JSON.parse(localStorage.getItem(shiftsKey)) || [];
const shiftsDataKey = `${username}ShiftsData`;
var ShiftsDataKey = JSON.parse(localStorage.getItem(shiftsDataKey)) || {};

document.getElementById('regular').innerHTML = "Regular hours: " + ShiftsDataKey.regular;
document.getElementById('extra').innerHTML = "Extra hours: " + ShiftsDataKey.extra;
document.getElementById('total').innerHTML = ShiftsDataKey.total;

var xGiven = 0;
for (var x = 0; x < ShiftsKey.length; x++) {
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = ShiftsKey[x].start;
    cell2.innerHTML = ShiftsKey[x].end;
    cell3.innerHTML = ShiftsKey[x].total;

    var button = document.createElement("button");
    button.textContent = "delete row";
    var buttonId = "button" + x;  // לדוג', "button3" עבור שורה חדשה
    button.id = buttonId;
    cell4.appendChild(button);
    xGiven = x;
}

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
    for (var y = 0; y < ShiftsKey.length; y++) {
        totalHours = totalHours + ShiftsKey[y].total;
    };
    document.getElementById('total').innerHTML = totalHours;
    
    //עדכון טבלה
    xGiven++
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = start;
    cell2.innerHTML = end;
    cell3.innerHTML = (end - start) / (1000 * 60 * 60);

    var button = document.createElement("button");
    button.textContent = "delete row";
    var buttonId = "button" + xGiven;  // לדוג', "button3" עבור שורה חדשה
    button.id = buttonId;
    cell4.appendChild(button);

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

document.getElementById("regularI").addEventListener("mouseover", function() {
    regularTooltip.style.display = "block"
});

//צריך להוסיף התניה של מחיקת שורה
