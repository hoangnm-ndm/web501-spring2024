import showToast from "../utils/toastMessage";
import { validSignUp } from "../validations/auth.valid";

const users = [];
const register = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPass = document.getElementById("confirmPass").value;
  const userInfor = {
    email,
    password,
    confirmPass,
  };

  if (validSignUp(userInfor)) {
    users.push(userInfor);
    localStorage.setItem("users", JSON.stringify(users));
    showToast("Register successfully!", 5000, "success");
  }
};
export default register;
