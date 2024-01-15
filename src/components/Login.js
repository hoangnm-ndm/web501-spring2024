import { validLogin } from "../validations/auth.valid";

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var userInfor = {
    email,
    password,
  };

  if (validLogin(userInfor)) {
    var dataUsers = JSON.parse(localStorage.getItem("users"));
    if (dataUsers && dataUsers.length > 0) {
      dataUsers.some((item) => {
        if (item.email === email && item.password === password) {
          alert("Dang nhap thanh cong!");
          return;
        }
      });
    }
  }
}

export default login;
