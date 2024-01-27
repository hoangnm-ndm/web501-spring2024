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
      // fetch("http://localhost:3000/register", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify(userInfor),
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     if (data.user) {
      //       const confirmValue = confirm(
      //         `Đăng ký thành công, bạn có muốn đăng nhập không?`
      //       );
      //       if (confirmValue) {
      //         window.location.href = "/login";
      //       }
      //     } else {
      //       alert(data);
      //     }
      //   });
      // ! Dùng axios
      const { data } = await instance.post("/register", {
        ...user,
        address: "",
        phoneNumber: "",
        role: "member",
      });
      // ! Destructuring
      // ! "..." Spread operator
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
    alert(`Error: ${error?.response?.data || "Failed!"}`);
  }
}

export default register;
