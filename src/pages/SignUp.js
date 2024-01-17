const SignUp = () => {
  return /*html*/ `
  <form>
  <h1>Register</h1>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input
      type="email"
      class="form-control"
      id="email"
    />
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input
      value=""
      type="password"
      class="form-control"
      id="password"
    />
  </div>
  <div class="mb-3">
    <label for="confirmPass" class="form-label">Confirm password</label>
    <input type="password" class="form-control" id="confirmPass" />
  </div>

  <button type="button" id="btnRegister" class="btn btn-primary">
    Register
  </button>
</form>

  `;
};

export default SignUp;
