import Controller from "./controller.js";
import View from "./view.js";
import Model from "./model.js";

document.addEventListener("DOMContentLoaded", () => {
  new Controller(new View(), new Model()).initEventListeners();
});
