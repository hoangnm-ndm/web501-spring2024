const SignIn = () => {
  return /*html*/ `
  <form>
    <h1>Login</h1>
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

    <button type="button" id="btnSignIn" class="btn btn-primary">
        Login
    </button>
  </form>
  `;
};

export default SignIn;
