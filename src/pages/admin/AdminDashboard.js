const AdminDashboard = () => {
  const emailAdmin = JSON.parse(sessionStorage.getItem("user"))?.user?.email;
  return /*html*/ `
  <h1>Hello, ${emailAdmin}</h1>
  `;
};

export default AdminDashboard;
