var dataPasswordsArray = JSON.parse(localStorage.getItem("passwordsData")) || [];

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
        window.location.href= "HomePage.html";
      } else {
        document.getElementById('mess').innerHTML = 'Username or password incorrect';
      }
}
document.getElementById("libt").addEventListener("click", handleSubmit);
