var dataPasswordsArray = JSON.parse(localStorage.getItem("passwordsData")) || [];

function handleSubmit(event) {
    event.preventDefault();
var x =0;
//שם משתמש
const vlifn = document.getElementById('InputUN').value
var foundUser = dataUsersArray.some(function(user){
    return user.userName === vlifn;
});
if (foundUser) {
    document.getElementById('InputUN').innerHTML = '';
    x++;
} else {
    document.getElementById('InputUN').innerHTML = 'Username does not exist';
}
//סיסמה
const vlips = document.getElementById('InputPassword').value
if (foundUser && foundUser.password === vlips) {
    document.getElementById('InputPassword').innerHTML = '';
    x++;
} else {
    document.getElementById('InputPassword').innerHTML = 'Incorrect password';
}
//זכור אותי
const checkbox = document.getElementById("Check").checked;
if(checkbox){
    var data = {
        userName: vlifn,
        password: vlips,
    };
    dataPasswordsArray.push(data);
    localStorage.setItem("usersData", JSON.stringify(dataPasswordsArray));
}
}
document.getElementById("libt").addEventListener("click", handleSubmit);

//לא עשיתי עדיין את מה שקורה לאחר שמשתמש שהתחבר ובחר שהמערכת תזכור את הסמסה שלו