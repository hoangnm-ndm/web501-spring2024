import Navigo from "navigo";

export const render = (target, content) => {
  target.innerHTML = content();
};

export const router = new Navigo("/", { linksSelector: "a" });
