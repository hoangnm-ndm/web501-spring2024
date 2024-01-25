import Navigo from "navigo";
export const render = (position, content) => {
  position.innerHTML = content();
};

export const router = new Navigo("/", { linksSelector: "a" });
