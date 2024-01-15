import "./style.css";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap";
import Navigo from "navigo";
import { render } from "./src/utils/common";
import { HomePage } from "./src/pages/HomePage";
import { AboutPage } from "./src/pages/AboutPage";
import SignUpPage from "./src/pages/SignUpPage";
import NotFoundPage from "./src/pages/NotFoundPage";
import register from "./src/components/Register";

const app = document.getElementById("app");
const router = new Navigo("/", { linksSelector: "a" });
router.on("/home", () => render(app, HomePage));
router.on("/about", () => render(app, AboutPage));
router.on("/signup", () => render(app, SignUpPage), {
  after() {
    const btnRegister = document.getElementById("btnRegister");
    btnRegister.onclick = register;
  },
});
router.on("/", () => router.navigate("/home"));
router.notFound(() => render(app, NotFoundPage));
router.resolve();
