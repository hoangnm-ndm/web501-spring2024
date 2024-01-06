var users = [];
function validationForm(username, password, confirmPass) {
  // Kiem tra du lieu
  if (username === "" || password === "" || confirmPass === "") {
    alert("khong duoc de trong!");
    return false;
  }
  if (password.length < 6) {
    alert("Password phai dai it nhat 6 ky tu!");
    return false;
  }
  if (password !== confirmPass) {
    alert("Confirm password không khớp!");
    return false;
  }
  return true;
}
function register() {
  // Buoc 1: lay gia tri
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;

  if (validationForm(username, password, confirmPass)) {
    // Buoc 2: Dua vao 1 object
    var userInfor = {
      username,
      password,
      confirmPass,
    };

    users.push(userInfor);
    // Buoc 3: dua userInfor vao localStorage
    localStorage.setItem("users", JSON.stringify(users));
    alert("Dang ky thanh cong!");
  }
}
// Xây dựng trang đăng nhập, nếu khớp dữ liệu trong localStorage thì báo đăng nhập thành công!
