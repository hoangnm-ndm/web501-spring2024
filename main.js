import "./node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import AboutPage from "./src/pages/AboutPage";
import Navigo from "navigo";
import HomePage from "./src/pages/HomePage.js";
import { render } from "./src/utils/common.js";
import NotFoundPage from "./src/pages/NotFoundPage.js";
import RegisterPage from "./src/pages/RegisterPage.js";
import ContactPage from "./src/pages/ContactPage.js";
import register from "./src/components/Register.js";
import SignInPage from "./src/pages/SignInPage.js";
import signIn from "./src/components/SignIn.js";

const router = new Navigo("/", { linksSelector: "a" });
const app = document.getElementById("app");

router.on("/", () => render(app, HomePage));
router.on("/home", () => router.navigate("/"));
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
router.notFound(() => render(app, NotFoundPage));
router.resolve();
