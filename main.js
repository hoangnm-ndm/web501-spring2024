import "./node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import AboutPage from "./src/pages/AboutPage";
import Navigo from "navigo";
import HomePage from "./src/pages/HomePage.js";
import { render } from "./src/utils/common.js";
import NotFoundPage from "./src/pages/NotFoundPage.js";

const router = new Navigo("/", { linksSelector: "a" });
const app = document.getElementById("app");

router.on("/", () => render(app, HomePage));
router.on("/home", () => router.navigate("/"));
router.on("/about", () => render(app, AboutPage));
router.notFound(() => render(app, NotFoundPage));
router.resolve();
