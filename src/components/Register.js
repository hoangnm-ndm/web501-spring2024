import { registerValid } from "../validations/auth.valid";

function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;

  var userInfor = {
    email,
    password,
  };

  if (registerValid({ ...userInfor, confirmPass })) {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfor),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          const confirmValue = confirm(
            `Đăng ký thành công, bạn có muốn đăng nhập không?`
          );
          if (confirmValue) {
            window.location.href = "/login";
          }
        } else {
          alert(data);
        }
      });
  }
}

export default register;
