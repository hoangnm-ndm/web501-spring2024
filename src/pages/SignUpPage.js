const SignUpPage = () => {
  return /*html*/ `
    <form action="">
      <h1>Đăng ký tài khoản mới!</h1>
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

      <div class="mb-3">
        <label for="confirmPass" class="form-label">Confirm password</label>
        <input type="password" class="form-control" id="confirmPass" />
      </div>

      <button
        type="button"
        id="btnRegister"
        onclick="register()"
        class="btn btn-primary w-100"
      >
        Đăng ký
      </button>

      <p>Đã có tài khoản? Ấn <a href="/login">Đăng nhập</a>ngay!</p>
    </form>
  `;
};

export default SignUpPage;
