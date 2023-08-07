var dataPasswordsArray = JSON.parse(localStorage.getItem("passwordsData")) || [];
var dataLoggedUser = JSON.parse(localStorage.getItem("loggedUser")) || {};

function handleSubmit(event) {
    event.preventDefault();
    const vlifn = document.getElementById('InputUN').value
    const vlips = document.getElementById('InputPassword').value

    var dataUsersArray = JSON.parse(localStorage.getItem("usersData")) || [];

    const isDataExists = dataUsersArray.some(data => data.userName === vlifn && data.password === vlips);
    if (isDataExists) {
        const checkbox = document.getElementById("Check");
        if(checkbox.checked){
            var data = {
                userName: vlifn,
                password: vlips,
            };
            dataPasswordsArray.push(data);
            localStorage.setItem("passwordsData", JSON.stringify(dataPasswordsArray));
        }
        dataUsersArray.forEach(function(userdata){
          if (userdata.userName === vlifn){
            localStorage.setItem("loggedUser", JSON.stringify(userdata));
          }
        });
        window.location.href= "index.html";
      } else {
        document.getElementById('mess').innerHTML = 'Username or password incorrect';
      }
}
document.getElementById("libt").addEventListener("click", handleSubmit);

function checkUserExists() {
  const vlifn2 = document.getElementById('InputUN').value
  const vlips2 = document.getElementById('InputPassword')
  
  const existingUser = dataPasswordsArray.find((user) => user.userName == vlifn2)
  if (existingUser) {
    //צריך להוסיף שאם המשתמש כבר קיים במערך ה"זכור אותי" הוא לא יוסיף שוב
    vlips2.value = existingUser.password;
  }
}
document.getElementById("InputUN").addEventListener("input", checkUserExists);
