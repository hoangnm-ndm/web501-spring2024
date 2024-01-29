const Dashboad = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return `
  <h1>Hello, ${user.user.email}</h1>

  `;
};

export default Dashboad;
