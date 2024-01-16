import { registerValid } from "../validations/auth.valid";

var users = [];

function register() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;

  var userInfor = {
    username,
    password,
    confirmPass,
  };

  if (registerValid(userInfor)) {
    users.push(userInfor);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Dang ky thanh cong!");
  }
}

export default register;
