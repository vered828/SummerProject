var dataUsersArray = JSON.parse(localStorage.getItem("usersData")) || [];
var dataLoggedUser = JSON.parse(localStorage.getItem("loggedUser")) || {};

function resetPassword(event) {
    event.preventDefault();

    const pass = document.getElementById('pas').value;
    const newPass = document.getElementById('npas').value;
    const newpass2 = document.getElementById('npas2').value;

    //בדיקה אם הסיסמה נכונה
    if(dataLoggedUser.password === pass){
        //בדיקת סיסמה חדשה
        var x = 0;
        const numbers = /[0-9]/;
        if(numbers.test(newPass)){
            x = x + 2;
        }
        const small = /[a-z]/;
        if(small.test(newPass)){
            x = x + 2;
        }
        const Capital = /[A-Z]/;
        if(Capital.test(newPass)){
            x = x + 2;
        }
        const specialCharacters = /[!@#$%^&*]/;
        if (specialCharacters.test(newPass)) {
            x = x + 2;
        }
        if(newPass.langth > 15){
            x = x + 4;
        }
        if(x > 5){
            //בדיקת אימות סיסמה
            if(newPass === newpass2){
                popup.style.display = "block"
                function generateRandomCode() {
                    const min = 1000;
                    const max = 9999;
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }
                const randomCode = generateRandomCode();
                console.log(randomCode);
                document.getElementById("cont").addEventListener("click", function(event1){
                    event1.preventDefault();
                    var Code = document.getElementById('code').value;
                    if(Number(Code) === randomCode){
                    dataLoggedUser.password = newPass;
                    dataLoggedUser.password2 = newPass;
                    localStorage.setItem('loggedUser', JSON.stringify(dataLoggedUser));
                    
                    var matchingObject = dataUsersArray.find(function(obj) {
                        return obj.userName === dataLoggedUser.userName;
                    });
                    matchingObject.password = newPass;
                    matchingObject.password2 = newPass; 
                    localStorage.setItem('usersData', JSON.stringify(dataUsersArray));
                    popup.style.display = "none"
                    } else {
                    document.getElementById('codeMess').innerHTML = 'Incorrect code';
                    }   
                });
            } else {
                document.getElementById('mnpas2').innerHTML = 'Passwords do not match';
            }
        } else {
            document.getElementById('mnpas').innerHTML = 'Invalid password';
        }
    } else {
        document.getElementById('mpas').innerHTML = 'Incorrect password';
    };
};
document.getElementById("reset").addEventListener("click", resetPassword);