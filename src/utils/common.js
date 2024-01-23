import Navigo from "navigo";
import axios from "axios";
export const router = new Navigo("/", {
  linksSelector: "a",
});

export const render = (target, content) => {
  target.innerHTML = content();
};

export const instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});
