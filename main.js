import "./style.css";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap";
import Navigo from "navigo";
import { render } from "./src/utils/common";
import { HomePage } from "./src/pages/HomePage";
import { AboutPage } from "./src/pages/AboutPage";
import SignUpPage from "./src/pages/SignUpPage";
import NotFoundPage from "./src/pages/NotFoundPage";
import validationForm from "./src/validations/auth.valid";

const app = document.getElementById("app");
const router = new Navigo("/", { linksSelector: "a" });
router.on("/home", () => render(app, HomePage));
router.on("/about", () => render(app, AboutPage));
router.on("/signup", () => render(app, SignUpPage), {
  after() {
    const register = () => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPass = document.getElementById("confirmPass").value;

      // Buoc 2: Gom du lieu vao object
      const userInfor = {
        email,
        password,
        confirmPass,
      };

      if (validationForm(userInfor)) {
        users.push(userInfor);
        // Buoc 3: Đưa vào localStorage.
        // localStorage.setItem("vidu", users);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Dang ky thanh cong!");
      }
    };

    const registerBtn = document.getElementById("registerBtn");
    registerBtn.onclick = register;
  },
});
router.on("/", () => router.navigate("/home"));
router.notFound(() => render(app, NotFoundPage));
router.resolve();
