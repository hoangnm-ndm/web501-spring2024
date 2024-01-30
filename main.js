import "./node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import AboutPage from "./src/pages/AboutPage";
import HomePage from "./src/pages/HomePage.js";
import { render, router } from "./src/utils/common.js";
import NotFoundPage from "./src/pages/NotFoundPage.js";
import RegisterPage from "./src/pages/RegisterPage.js";
import ContactPage from "./src/pages/ContactPage.js";
import register from "./src/components/Register.js";
import SignInPage from "./src/pages/SignInPage.js";
import signIn from "./src/components/SignIn.js";
import AdminDashboard from "./src/pages/admin/AdminDashboard.js";
import handleAdmin from "./src/components/handleAdmin.js";
import handleProductList from "./src/components/handleProductList.js";
import ProductDetail from "./src/pages/ProductDetail.js";
import handleProductDetail from "./src/components/handleProductDetail.js";

const app = document.getElementById("app");

router.on("/", () => render(app, HomePage), {
  after() {
    handleProductList();
  },
});
router.on("/home", () => router.navigate("/"));
router.on("/detail/:id", () => render(app, ProductDetail), {
  after(data) {
    handleProductDetail(data);
  },
});
router.on("/contact", () => render(app, ContactPage));
router.on("/about", () => render(app, AboutPage));
router.on("/signup", () => render(app, RegisterPage), {
  after() {
    const btnRegister = document.getElementById("btnRegister");
    btnRegister.onclick = register;
  },
});
router.on("/login", () => render(app, SignInPage), {
  after() {
    const btnSignIn = document.getElementById("btnSignIn");
    btnSignIn.onclick = signIn;
  },
});

router.on("/logout", () => {
  sessionStorage.removeItem("user");
  alert("Đăng xuất thành công!");
  router.navigate("/login");
});
router.on("/admin", () => render(app, AdminDashboard), {
  before(done) {
    console.log("before");
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user?.user?.role === "admin") {
      done();
    } else {
      alert("Bạn không có quyền vào trang này!");
      window.location.href = "/";
    }
  },
  after() {
    handleAdmin();
  },
});
router.notFound(() => render(app, NotFoundPage));
router.resolve();
