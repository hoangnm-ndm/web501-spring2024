var myDocument = {
  html: {
    head: {
      title: "Tieu de trang web",
    },
    body: {
      h1: {
        content: "Xin chao cac ban",
      },
      p: "ten toi la Hoang",
      div: {
        div: {},
      },
    },
  },
};

// console.log(myDocument);

/**
 * Có 3 loại node trong DOM: element, attribute, text
 *
 * Các cách lấy 1 element trong DOM:
 *
 */

var h1Element1 = document.getElementById("tieuDe");
var h1Element2 = document.getElementsByClassName("title")[0];
var h1Element3 = document.querySelector("h1#tieuDe.title");
var h1Element4 = document.querySelectorAll("h1#tieuDe.title")[0]; // return NodeList()
var h1Element5 = document.getElementsByTagName("h1")[0];
// console.log(h1Element1);
// console.log(h1Element2);
// console.log(h1Element3);
// console.log(h1Element4);
// console.log(h1Element5);

var myInfor = {
  myName: "Nguyễn Minh Hoàng",
  age: 32,
  address: "Bắc Giang",
  mssv: "PH1234",
};

/**
 * Yêu cầu: Hiển thị thông tin myInfor ra màn hình,
 * Gợi ý: sử dụng createElement, appenChild innerText, innerHTML...
 */

var cardElement = document.getElementsByClassName("card")[0];
console.log(cardElement);

var htmlText = `
<h2 class="name">Tên: ${myInfor.myName}</h2>
<div class="age">Tuổi: ${myInfor.age + 1}</div>
<div>Địa chỉ: ${myInfor.address}</div>
<div>Mã sinh viên: ${myInfor.mssv}</div>
`;
console.log(typeof htmlText);
cardElement.innerHTML = htmlText;

var ageElement = document.getElementsByClassName("age")[0];

console.log(ageElement);
ageElement.style.fontWeight = 900;

/**
 * `` gọi là template string,
 * Khi muốn gọi biến hoặc biểu thức thì dùng ${biểu thực hoặc biến}
 */

// Có 2 cách comment trong js:
// Đây là comment 1 dòng
/**
 * Đây là comment nhiều dòng.
 *
 *
 */
