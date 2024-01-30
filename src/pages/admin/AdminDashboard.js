const AdminDashboard = () => {
  const emailAdmin = JSON.parse(sessionStorage.getItem("user"))?.user?.email;
  console.log(emailAdmin);
  console.log("rendering AdminDashboard");
  return /*html*/ `
  <h1>Hello, ${emailAdmin}</h1>
  `;
};

export default AdminDashboard;
