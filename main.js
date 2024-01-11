import "./style.css";
import { AboutPage } from "./src/pages/AboutPage";
import { HomePage } from "./src/pages/HomePage";

const app = document.getElementById("app");

app.innerHTML = HomePage();
