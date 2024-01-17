export function validRegister(user) {
  if (!user.email || !user.password || !user.confirmPass) {
    alert("Khong duoc de trong!");
    return false;
  }
  if (user.password.length < 6) {
    alert("Password phai dai hon 6 ky tu!");
    return false;
  }
  if (user.confirmPass !== user.password) {
    alert("Mat khau nhap lai khong khop!");
    return false;
  }
  return true;
}

export function validSignIn(user) {
  if (!user.email || !user.password) {
    alert("Khong duoc de trong!");
    return false;
  }
  if (user.password.length < 6) {
    alert("Password phai dai hon 6 ky tu!");
    return false;
  }
  return true;
}
