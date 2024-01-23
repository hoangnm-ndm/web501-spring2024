import { signInValid } from "../validations/auth.valid";

function signIn() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  const user = {
    email,
    password,
  };

  if (signInValid(user)) {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          const confirmValue = confirm(
            `Đăng nhập thành công, chuyển đến trang chủ?`
          );
          if (confirmValue) {
            window.location.href = "/";
          }
        } else {
          alert(data);
        }
      });
  }
}

export default signIn;
