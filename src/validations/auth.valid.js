function validSignUp(user) {
  if (user.email === "" || user.password === "" || user.confirmPass === "") {
    alert("khong duoc de trong!");
    return false;
  }
  if (user.password.length < 6) {
    alert("Password qua ngan!");
    return false;
  }

  if (user.password !== user.confirmPass) {
    alert("Mat khau nhap lai khong khop!");
    return false;
  }

  return true;
}

function validLogin(user) {
  if (user.email === "" || user.password === "") {
    alert("khong duoc de trong!");
    return false;
  }
  if (user.password.length < 6) {
    alert("Password qua ngan!");
    return false;
  }

  return true;
}

export { validLogin, validSignUp };
