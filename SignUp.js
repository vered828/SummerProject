var dataUsersArray = JSON.parse(localStorage.getItem("usersData")) || [];

function handleSubmit(event) {
    event.preventDefault();
var x =0;
//שם פרטי
const vsufn = document.getElementById('sufn').value
if(vsufn.length < 2){
    document.getElementById('msufn').innerHTML = 'Minimum 2 letters';
}else{
    x++;
}
//שם משפחה
const vsuln = document.getElementById('suln').value
if(vsuln.length < 2){
    document.getElementById('msuln').innerHTML = 'Minimum 2 letters';
}else{
    x++;
}
//שם משתמש
const vsuun = document.getElementById('suun').value  
const engl = /^[A-Za-z]+$/;
if(vsuun.length < 4 && !engl.test(vsuun)){
    document.getElementById('msuun').innerHTML = 'English letters only and minimum 4 letters';
}else if(!engl.test(vsuun)){
    document.getElementById('msuun').innerHTML = 'English letters only';
}else if(vsuun.length < 4){
    document.getElementById('msuun').innerHTML = 'Minimum 4 letters';
}else{
    x++
}
//בדיקה האם המשתמש קיים במערכת
var isDuplicate = dataUsersArray.some(function(data){
    return data.userName === vsuun;
});
if (isDuplicate) {
    document.getElementById('msuun').innerHTML = 'User exists in the system';
} else {
    x++;
}
//סיסמה
const vsups = document.getElementById('sups').value
const el = /[A-Za-z]/;
const nl = /[0-9]/;
if(vsups.length < 6 && (!el.test(vsups) || !nl.test(vsups))){
    document.getElementById('msups').innerHTML = 'Must contain letters and numbers and minimum 6 letters';
}else if(vsups.length < 6){
    document.getElementById('msups').innerHTML = 'Minimum 6 letters';
}else if((!el.test(vsups) || !nl.test(vsups))){
    document.getElementById('msups').innerHTML = 'Must contain letters and numbers';           
}else{
    x++;
}
//אימות סיסמה
const vsups2 = document.getElementById('sups2').value
if(vsups2 != vsups){
    document.getElementById('msups2').innerHTML = 'Passwords do not match';
}else{
    x++;
}
//אימייל
const vsuem = document.getElementById('suem').value
const eml = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!eml.test(vsuem)){
    document.getElementById('msuem').innerHTML = 'Invalid email'
}else{
    x++;
}
//גיל
const vsuag = document.getElementById('suag').value
if(vsuag < 18){
    document.getElementById('msuag').innerHTML = 'too young'
}else if(vsuag > 65){
    document.getElementById('msuag').innerHTML = 'too old'
}else{
    x++;
}
//בדיקה האם כל הנתונים תקינים וקליטתם
if(x == 8){
    var data = {
        firstName: vsufn,
        lastName: vsuln,
        userName: vsuun,
        password: vsups,
        password2: vsups2,
        Email: vsuem,
        age: vsuag,
    };
    dataUsersArray.push(data);
    localStorage.setItem("usersData", JSON.stringify(dataUsersArray));
}
}
document.getElementById("subt").addEventListener("click", handleSubmit);
