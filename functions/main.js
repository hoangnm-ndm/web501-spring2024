/**
 * Cac loai function:
 * 1. named function
 * 2. anonymous function
 * 3. expression function
 * 4. arrow function
 */

// named function
function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20));

// anonymous function
setTimeout(() => console.log("hello"), 3000);

// expression function
const loiChao = function () {
  console.log("hello");
};

// arrow function
const tinhTong = (a, b) => {
  return a + b;
};
// arrow function: viet rut gon
const tinhTong1 = (a, b) => a + b;

const returnObj = () => {
  // tin toan
  return {
    name: "Hoang",
    age: 18,
  };
};

const returnObj2 = () => ({
  name: "Hoang",
  age: 18,
});

const returnArr = () => ["Hoang", "Anh", "Kien"];
