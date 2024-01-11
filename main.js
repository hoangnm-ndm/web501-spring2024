import { HomePage as Home } from "./src/pages/HomePage";
import "./node_modules/bootstrap/dist/js/bootstrap";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./src/components/Header.js";
import About from "./src/pages/AboutPage";
import { Header } from "./src/components/Header";

const app = document.getElementById("app");

app.innerHTML = About();

/**
 *
 */
