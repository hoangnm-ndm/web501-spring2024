const user = {
  username: "hoang",
  age: 32,
  address: "sdsad",
};

// ? Destructuring
// const username = user.username;
// const age = user.age;

const { username, age, address } = user;

const user2 = { ...user, role: "admin", email: "hoang@gmail.com" };

console.log(username);
console.log(age);
console.log(address);
