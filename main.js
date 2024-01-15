import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap";
import "./src/styles/toastMessage.css";
import "./src/styles/product.css";
import "./src/styles/style.css";
import Navigo from "navigo";
import { render } from "./src/utils/common";
import SignUpPage from "./src/pages/SignUpPage";
import NotFoundPage from "./src/pages/NotFoundPage";
import register from "./src/components/Register";
import SignInPage from "./src/pages/SignInPage";
import login from "./src/components/Login";
import HomePage from "./src/pages/HomePage";
import AboutPage from "./src/pages/AboutPage";
import ShowToast from "./src/pages/ShowToast";
import showToast from "./src/utils/toastMessage";

const url = "http://localhost:3000";

const app = document.getElementById("app");
const router = new Navigo("/", { linksSelector: "a" });
router.hooks({
  after() {},
});
router.on("/home", () => render(app, HomePage), {
  before(done) {
    fetch(`${url}/products`)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("products", JSON.stringify(data));
      });
    done();
  },
});
router.on("/about", () => render(app, AboutPage));
router.on("/shop", () => render(app, HomePage));
router.on("/toast-demo", () => render(app, ShowToast), {
  after() {
    const handleClickSuccess = document.getElementById("handleClickSuccess");

    const handleClickError = document.getElementById("handleClickError");

    const handleClickWarning = document.getElementById("handleClickWarning");

    handleClickSuccess.onclick = () => {
      showToast("Success!", 3000, "success");
    };
    handleClickError.onclick = () => {
      showToast("Error!", 3000, "error");
    };
    handleClickWarning.onclick = () => {
      showToast("Warning!", 3000, "warning");
    };
  },
});
router.on("/signup", () => render(app, SignUpPage), {
  after() {
    const btnRegister = document.getElementById("btnRegister");
    btnRegister.onclick = register;
  },
});

router.on("/signin", () => render(app, SignInPage), {
  after() {
    const btnLogin = document.getElementById("btnLogin");
    btnLogin.onclick = login;
  },
});
router.on("/", () => router.navigate("/home"));
router.notFound(() => render(app, NotFoundPage));
router.resolve();
