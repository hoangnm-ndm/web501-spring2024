import api from "../apis";
import { router } from "../utils/common";
import { validSignIn } from "../validations/auth.valid";

async function login() {
  try {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
      email,
      password,
    };
    if (validSignIn(user)) {
      const { data } = await api.post("/login", user);
      if (data && data.user) {
        sessionStorage.setItem("user", JSON.stringify(data));
        const confirmValue = confirm(
          "Đăng nhập thành công, có muốn chuyển sang trang home không?"
        );
        if (confirmValue) {
          router.navigate("/home");
        }
      } else {
        alert(data);
        // data nếu không có user bên trong thì thường data là string "Email không đúng định dạng..."
      }
    }
  } catch (error) {
    console.log(error);
  }
}
export default login;
