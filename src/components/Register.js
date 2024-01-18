import { registerValid } from "../validations/auth.valid";

var users = [];

function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;

  var userInfor = {
    email,
    password,
    confirmPass,
  };

  if (registerValid(userInfor)) {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userInfor.email,
        password: userInfor.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
}

export default register;
