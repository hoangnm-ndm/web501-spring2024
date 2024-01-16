import { signInValid } from "../validations/auth.valid";

function signIn() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (signInValid({ username, password })) {
    if (localStorage.getItem("users")) {
      var dataLocalStorage = JSON.parse(localStorage.getItem("users"));
      dataLocalStorage.some((item) => {
        if (item.username === username && item.password === password) {
          alert("Dang nhap thanh cong!");
          return;
        }
      });
    }
  }
}

export default signIn;
