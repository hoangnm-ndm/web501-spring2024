import { router } from "../utils/common";
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
      .then((res) => res.json())
      .then((data) => {
        if (data && data.user) {
          sessionStorage.setItem("user", data.user);
          const confirmValue = confirm(
            `Dang nhap thanh cong, có muốn chuyển sang trang mua sắm không?, ${data.user.email}`
          );
          if (confirmValue) {
            router.navigate("/home");
          }
        } else {
          alert(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
export default login;
