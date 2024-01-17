import { validSignIn } from "../validations/auth.valid";

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var user = {
    email,
    password,
  };
  if (validSignIn(user)) {
    var usersData = JSON.parse(localStorage.getItem("users"));
    if (usersData && usersData.length > 0) {
      usersData.some((item) => {
        if (item.email === email && item.password === password) {
          alert("Dang nhap thanh cong!");
        }
      });
    }
  }
}
export default login;
