import { HomePage } from "./src/pages/HomePage";
import "./node_modules/bootstrap/dist/js/bootstrap";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const app = document.getElementById("app");

app.innerHTML = HomePage();
