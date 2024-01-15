import showToast from "../utils/toastMessage";

function validSignUp(user) {
  if (user.email === "" || user.password === "" || user.confirmPass === "") {
    showToast("Không được để trống!", 3000, "error");
    return false;
  }
  if (user.password.length < 6) {
    showToast("Password phải dài hơn 6 ký tự!", 3000, "error");
    return false;
  }

  if (user.password !== user.confirmPass) {
    showToast("Password không trùng khớp!", 3000, "error");
    return false;
  }

  return true;
}

function validLogin(user) {
  if (user.email === "" || user.password === "") {
    showToast("Không được để trống!", 3000, "error");
    return false;
  }
  if (user.password.length < 6) {
    showToast("Password phải dài hơn 6 ký tự!", 3000, "error");
    return false;
  }

  return true;
}

export { validLogin, validSignUp };
