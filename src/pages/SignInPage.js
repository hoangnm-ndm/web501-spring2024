const SignInPage = () => {
  return /*html*/ `
  <form action="">
  <h1>Login</h1>

  <div class="mb-3">
    <label for="email" class="form-label">Your email:</label>
    <input
      type="email"
      class="form-control"
      id="email"
      placeholder="Your email..."
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
    <button class="btn btn-primary" type="button" id="btnSignIn">
      Đăng nhập
    </button>
  </div>
</form>
  `;
};

export default SignInPage;
