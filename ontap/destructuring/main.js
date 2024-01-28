const myInfor = {
  name: "Hoang",
  age: 18,
  email: "hoang@gmail.com",
};

// const name = myInfor.name;
// const age = myInfor.age;
// const email = myInfor.email;

const { name, age, email } = {
  name: "Hoang",
  age: 18,
  email: "hoang@gmail.com",
};

// destructuring = giải phóng, giải nén, phá huỷ
// console.log(name);

const students = ["Hoang", "Huy", "Hieu", "Hoa"];

const [theFirst, theSecond, theThird, ...conLai] = students;
// rest = phần còn lại,
// spead = rải các phần tử ra
console.log(theFirst);
console.log(conLai);
