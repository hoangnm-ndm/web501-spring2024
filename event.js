// console.log("Buổi 2");
// var newElement = document.createElement("div");
// newElement.innerText = "Xin chao ca lop!";
// document.body.appendChild(newElement);
// document.body.removeChild(newElement);

function login() {
  console.log("Dang nhap thanh cong!");
}

// Cach 2:
var loginSubmit = document.getElementsByClassName("login")[1];
console.log(loginSubmit);
loginSubmit.onclick = login;

// Cach 3:
var loginSubmit3 = document.getElementById("dangNhap");
loginSubmit3.addEventListener("click", login);
