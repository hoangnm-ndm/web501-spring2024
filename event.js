// console.log("Buổi 2");
// var newElement = document.createElement("div");
// newElement.innerText = "Xin chao ca lop!";
// document.body.appendChild(newElement);
// document.body.removeChild(newElement);

// function login() {
//   console.log("Dang nhap thanh cong!");
// }

// // Cach 2:
// var loginSubmit = document.getElementsByClassName("login")[1];
// console.log({ loginSubmit });
// loginSubmit.onclick = login;

// // Cach 3:
// var loginSubmit3 = document.getElementById("dangNhap");
// loginSubmit3.addEventListener("click", login);

function register() {
  // Buoc 1: lay gia tri
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;
  // Buoc 2: Dua vao 1 object
  var userInfor = {
    username,
    password,
    confirmPass,
  };

  // BOM = Browser Object Model
  // Buoc 3: dua userInfor vao localStorage

  localStorage.setItem("userInfor", JSON.stringify(userInfor));

  //JSON = Javascript Object Notation
}
