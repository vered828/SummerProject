var dataPasswordsArray = JSON.parse(localStorage.getItem("passwordsData")) || [];
var dataLoggedUser = JSON.parse(localStorage.getItem("loggedUser")) || {};

function handleSubmit(event) {
    event.preventDefault();
    const vliun = document.getElementById('InputUN').value
    const vlips = document.getElementById('InputPassword').value

    var dataUsersArray = JSON.parse(localStorage.getItem("usersData")) || [];

    const isDataExists = dataUsersArray.some(data => data.userName === vliun && data.password === vlips);
    if (isDataExists) {
        const checkbox = document.getElementById("Check");
        if(checkbox.checked){
          //לבדוק אם המשתמש שמור במערך הסיסמאות
          const isUserExists = dataPasswordsArray.some(date => date.userName === vliun);
          if(isUserExists){
            //אם כן
              //לבדוק אם הסיסמה שונה מהסיסמה השמוררה באובייקט
              const isPasswordExists = dataPasswordsArray.some(data => data.userName === vliun && data.password ==! vlips);
              if(isPasswordExists){
                //אם כן
                } else {
                //אם לא
                //לעדכן סיסמה
                var matchingObject = dataPasswordsArray.find(function(obj) {
                  return obj.userName === vliun;
                });
                matchingObject.password = vlips;
                localStorage.setItem('passwordsData', JSON.stringify(dataPasswordsArray));
                }
          } else {
            //אם לא
            var data = {
              userName: vliun,
              password: vlips,
            };
            dataPasswordsArray.push(data);
            localStorage.setItem("passwordsData", JSON.stringify(dataPasswordsArray));
          }
        }
        dataUsersArray.forEach(function(userdata){
          if (userdata.userName === vliun){
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
    vlips2.value = existingUser.password;
  }
}
document.getElementById("InputUN").addEventListener("input", checkUserExists);
