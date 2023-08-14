var dataLoggedUser = JSON.parse(localStorage.getItem("loggedUser")) || {};

document.getElementById('fn').value = dataLoggedUser.firstName;
document.getElementById('ln').value = dataLoggedUser.lastName;
document.getElementById('em').value = dataLoggedUser.Email;
document.getElementById('age').value = dataLoggedUser.age;

var vun = dataLoggedUser.userName;
var vpss = dataLoggedUser.password;
var vpss2 = dataLoggedUser.password2;

function updating(event) {
    event.preventDefault();
    var x = 0;
    //שם פרטי
    const nfn = document.getElementById('fn').value
    if(nfn.length < 2){
        document.getElementById('mfn').innerHTML = 'Minimum 2 letters';
    }else{
        x++;
    }
    //שם משפחה
    const nln = document.getElementById('ln').value
    if(nln.length < 2){
        document.getElementById('mln').innerHTML = 'Minimum 2 letters';
    }else{
        x++;
    }
    //אימייל
    const nem = document.getElementById('em').value
    const eml = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!eml.test(nem)){
        document.getElementById('mem').innerHTML = 'Invalid email'
    }else{
        x++;
    }
    //גיל
    const nage = document.getElementById('age').value
    if(nage < 18){
        document.getElementById('mage').innerHTML = 'too young'
    }else if(nage > 65){
        document.getElementById('mage').innerHTML = 'too old'
    }else{
        x++;
    }
    //עדכון הנתונים
    if(x == 4){
        var data = {
            firstName: nfn,
            lastName: nln,
            userName: vun,
            password: vpss,
            password2: vpss2,
            Email: nem,
            age: nage,
        };
        dataLoggedUser = data;
        localStorage.setItem("loggedUser", JSON.stringify(dataLoggedUser));

        var dataUsersArray = JSON.parse(localStorage.getItem("usersData")) || [];
        var matchingObject = dataUsersArray.find(function(obj) {
            return obj.userName === vun;
        });
        matchingObject.firstName = nfn;
        matchingObject.lastName = nln;
        matchingObject.Email = nem;
        matchingObject.age = nage;
        localStorage.setItem('usersData', JSON.stringify(dataUsersArray));

        document.getElementById('message').style.display = 'block';
        setTimeout(function() {
            document.getElementById('message').style.display = 'none';
        }, 3000);
    }
}
document.getElementById("bt").addEventListener("click", updating);