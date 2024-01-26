import { router } from "../utils/common";
import { validRegister } from "../validations/auth.valid";

function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;
  var user = {
    email,
    password,
  };

  if (validRegister({ ...user, confirmPass })) {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...user,
        address: "",
        role: "member",
        cart: [],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.user) {
          const confirmValue = confirm(
            `Dang ky thanh cong, có muốn chuyển sang trang login không?, ${data.user.email}`
          );
          if (confirmValue) {
            router.navigate("/signin");
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

export default register;
