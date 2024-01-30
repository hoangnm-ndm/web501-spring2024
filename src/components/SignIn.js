import instance from "../apis";
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
    try {
      const { data } = await instance.post("/login", user);
      if (data?.user) {
        sessionStorage.setItem("user", JSON.stringify(data));
        const confirmValue = confirm(
          `Đăng nhập thành công, chuyển đến trang chủ?`
        );
        if (confirmValue) {
          router.navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
      alert(`Error: ${error?.response?.data || "Failed!"}`);
    }
  }
}

export default signIn;
