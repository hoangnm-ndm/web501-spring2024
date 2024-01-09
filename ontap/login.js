function validationForm(username, password) {
  // Kiem tra du lieu
  if (!username || !password) {
    alert("khong duoc de trong!");
    return false;
  }
  if (password.length < 6) {
    alert("Password phai dai it nhat 6 ky tu!");
    return false;
  }
  return true;
}
function login() {
  // Buoc 1: lay gia tri
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (validationForm(username, password)) {
    // Buoc 2: Lấy dữ liệu từ API (localStorage)
    if (localStorage.getItem("users")) {
      var dataLocalStorage = JSON.parse(localStorage.getItem("users"));
      // Buoc 3: So sanh gia trị nhập vào và giá trị lấy từ localStorage
      dataLocalStorage.some((item) => {
        if (item.username === username && item.password === password) {
          alert("Dang nhap thanh cong!");
          return;
        }
      });
    }
  }
}

/**
 * trusthy và falsy
 * 6 giá trị sau khi convert sang boolean sẽ là falsy:
 * 1. false
 * 2. null
 * 3. undefined
 * 4. 0
 * 5. ""
 * 6. NaN
 */

console.log(!!0);
