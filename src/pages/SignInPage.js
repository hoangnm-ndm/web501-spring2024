const SignInPage = () => {
  return /*html*/ `
    <form action="">
      <h1>Login</h1>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" />
      </div>

      <button type="button" id="btnLogin" class="btn btn-primary w-100">
        Login
      </button>
    </form>
  `;
};

export default SignInPage;
