import "./style.css";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap.js";
import Navigo from "navigo";
import { render } from "./src/utils/common";
import { HomePage } from "./src/pages/HomePage";
import { AboutPage } from "./src/pages/AboutPage";
import SignUpPage from "./src/pages/SignUpPage";
import NotFoundPage from "./src/pages/NotFoundPage";

const app = document.getElementById("app");
const router = new Navigo("/", { linksSelector: "a" });
router.on("/home", () => render(app, HomePage));
router.on("/about", () => render(app, AboutPage));
router.on("/signup", () => render(app, SignUpPage));
router.notFound(() => render(app, NotFoundPage));
router.resolve();
