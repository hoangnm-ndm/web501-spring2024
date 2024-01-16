const RegisterPage = () => {
  return /*html*/ `
  <form action="">
  <h1>Register</h1>
  <div class="mb-3">
    <label for="username" class="form-label">Username:</label>
    <input
      type="text"
      class="form-control"
      id="username"
      placeholder="Your username..."
    />
  </div>

  <div class="mb-3">
    <label for="password" class="form-label">Password:</label>
    <input
      type="password"
      class="form-control"
      id="password"
      placeholder="Your password..."
    />
  </div>
  <div class="mb-3">
    <label for="confirmPass" class="form-label">ConfirmPass:</label>
    <input
      type="password"
      class="form-control"
      id="confirmPass"
      placeholder="Your confirmPass..."
    />
  </div>
  <div class="mb-3">
    <button class="btn btn-primary" id="btnRegister" type="button" >
      Đăng ký
    </button>
  </div>
</form>
  `;
};

export default RegisterPage;
