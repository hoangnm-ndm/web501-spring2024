import { validSignIn } from "../validations/auth.valid";

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var user = {
    email,
    password,
  };
  if (validSignIn(user)) {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data?.user?.email) {
          alert(`Dang nhap thanh cong, ${data.user.email}`);
        } else {
          alert(`Error: Dang nhap that bai!`);
        }
      });
  }
}
export default login;
