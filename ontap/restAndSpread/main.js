const students1 = ["Lan", "Ngoc", "Dong", "Minh"];
const students2 = ["Nghia"];

// const student3 = students1.concat(students2);
// ? Spread
const student3 = [...students1, ...students2, "Trang"];
console.log(student3);
