import { validRegister } from "../validations/auth.valid";

function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;
  var user = {
    email,
    password,
    confirmPass,
  };

  if (validRegister(user)) {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, password: user.password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Dang ky thanh cong!");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default register;
