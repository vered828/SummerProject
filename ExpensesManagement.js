const optionsArray = ["Taxi", "Food", "Clothes"];

const selectBox = document.getElementById("type");
optionsArray.forEach(type => {
  const optionElement = document.createElement("option");
  optionElement.text = type;
  selectBox.appendChild(optionElement);
});

var dataLoggedUser = JSON.parse(localStorage.getItem("loggedUser")) || {};
var username = dataLoggedUser.userName;
const expensesKey = `${username}Expenses`;
var ExpensesKey = JSON.parse(localStorage.getItem(expensesKey)) || [];

document.getElementById("add").addEventListener("click", function () {
  var data = {
    sum: document.getElementById('sum').value,
    kind: document.getElementById('type').value,
    date: document.getElementById('date').value,
  };
  ExpensesKey.push(data);
  localStorage.setItem(expensesKey, JSON.stringify(ExpensesKey));
});
