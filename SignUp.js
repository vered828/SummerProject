function handleSubmit(event) {
    event.preventDefault();
    
    var x =0;

//שם פרטי
const vfn = document.getElementById('fn').value
if(vfn.length < 2){
    document.getElementById('mfn').innerHTML = 'Minimum 2 letters';
}else{
    x++;
}

//שם משפחה
const vln = document.getElementById('ln').value
if(vln.length < 2){
    document.getElementById('mln').innerHTML = 'Minimum 2 letters';
}else{
    x++;
}

//שם משתמש
const vun = document.getElementById('un').value  
const engl = /^[A-Za-z]+$/;
if(vun.length < 4 && !engl.test(vun)){
    document.getElementById('mun').innerHTML = 'English letters only and Minimum 4 letters';
}else if(!engl.test(vun)){
    document.getElementById('mun').innerHTML = 'English letters only';
}else if(vun.length < 4){
    document.getElementById('mun').innerHTML = 'Minimum 4 letters';
}else{
    x++
}

//בדיקה האם המשתמש קיים במערכת
var dataArray = JSON.parse(localStorage.getItem("usersData")) || [];
var isDuplicate = dataArray.some(function(data){
    return data.userName === vun;
});
    
if (isDuplicate) {
    document.getElementById('mun').innerHTML = 'User exists in the system';
} else {
    x++;
}

//סיסמה
const vps = document.getElementById('ps').value
const el = /[A-Za-z]/;
const nl = /[0-9]/;
if(
    vps.length < 6 &&
    (!el.test(vps) ||
    !nl.test(vps))
){
    document.getElementById('mps').innerHTML = 'Must contain letters and numbers and Minimum 6 letters';
}else if(vps.length < 6){
    document.getElementById('mps').innerHTML = 'Minimum 6 letters';
}else if(
    (!el.test(vps) ||
    !nl.test(vps))
){
    document.getElementById('mps').innerHTML = 'Must contain letters and numbers';           
}else{
    x++;
}

//אימות סיסמה
const vps2 = document.getElementById('ps2').value
if(vps2 != vps){
    document.getElementById('mps2').innerHTML = 'Passwords do not match';
}else{
    x++;
}

//אימייל
const vem = document.getElementById('em').value
const eml = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!eml.test(vem)){
    document.getElementById('mem').innerHTML = 'Invalid email'
}else{
    x++;
}

//גיל
const vag = document.getElementById('ag').value
if(vag < 18){
    document.getElementById('mag').innerHTML = 'too young'
}else if(vag > 65){
    document.getElementById('mag').innerHTML = 'too old'
}else{
    x++;
}


if(x == 8){

    var data = {
        firstName: vfn,
        lastName: vln,
        userName: vun,
        password: vps,
        password2: vps2,
        Email: vem,
        age: vag,
    };
    
//    var dataArray = JSON.parse(localStorage.getItem("usersData")) || [];
    dataArray.push(data);
    localStorage.setItem("usersData", JSON.stringify(dataArray));
}
}
document.getElementById("bt").addEventListener("click", handleSubmit);
