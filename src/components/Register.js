import instance from "../apis";
import { router } from "../utils/common";
import { registerValid } from "../validations/auth.valid";
async function register() {
  try {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPass = document.getElementById("confirmPass").value;

    var user = {
      email,
      password,
    };

    if (registerValid({ ...user, confirmPass })) {
      const { data } = await instance.post("/register", {
        ...user,
        address: "",
        phoneNumber: "",
        role: "member",
      });
      if (data?.user) {
        const confirmValue = confirm(
          `Đăng ký thành công, chuyển đến trang đăng nhập?`
        );
        if (confirmValue) {
          router.navigate("/login");
        }
      }
    }
  } catch (error) {
    console.log(error);
    // alert(`Error: ${error?.response?.data || "Failed!"}`);
  }
}

export default register;
