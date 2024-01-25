import { router } from "../utils/common";
import { signInValid } from "../validations/auth.valid";

async function signIn() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  const user = {
    email,
    password,
  };

  if (signInValid(user)) {
    // fetch("http://localhost:3000/login", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    // })
    //   .then((res) => res.json()) // một việc phải chờ đợi
    //   .then((data) => {
    //     if (data.user) {
    //       const confirmValue = confirm(
    //         `Đăng nhập thành công, chuyển đến trang chủ?`
    //       );
    //       if (confirmValue) {
    //         window.location.href = "/";
    //       }
    //     } else {
    //       alert(data);
    //     }
    //   })
    //   .catch((error) => console.log(error));

    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    if (data.user) {
      console.log(data);
      const confirmValue = confirm(
        `Đăng nhập thành công, chuyển đến trang chủ?`
      );
      if (confirmValue) {
        router.navigate("/");
      }
    } else {
      alert(`Error: ${data}`);
    }
  }
}

export default signIn;
