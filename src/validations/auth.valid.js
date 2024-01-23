export const registerValid = (user) => {
  if (user.email === "" || user.password === "" || user.confirmPass === "") {
    alert("khong duoc de trong!");
    return false;
  }
  if (user.password.length < 6) {
    alert("Password phai dai it nhat 6 ky tu!");
    return false;
  }
  if (user.password !== user.confirmPass) {
    alert("Confirm password không khớp!");
    return false;
  }
  return true;
};

export const signInValid = (user) => {
  if (user.email === "" || user.password === "") {
    alert("khong duoc de trong!");
    return false;
  }
  if (user.password.length < 6) {
    alert("Password phai dai it nhat 6 ky tu!");
    return false;
  }
  return true;
};
