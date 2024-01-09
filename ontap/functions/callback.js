// callback = Hàm gọi lại
function xinTienMe(callback) {
  console.log("Năn nỉ mẹ cho tiền");
  setTimeout(function () {
    console.log("Cho tiền");
    // Neu me cho ko du tien thi sao?
    let tienMeCho = 3000;
    callback(tienMeCho); //ko co tham so
  }, 3000);
}

function muaXeMay(tien) {
  if (tien > 10000000) {
    console.log("Mua xe may");
  } else {
    console.log("thoi");
  }
}

// setTimeout, setInterval
// xinTienMe(muaXeMay);

/**
 * Có 3 cách để giải quyết bất đồng bộ:
 * 1. callback
 * 2. promise
 * 3. async/await
 */

console.log("cong viec 1");
setTimeout(() => {
  console.log("cong viec 2");
}, 0);
// callstack
console.log("cong viec 3");
