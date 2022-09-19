export default class Calculadora {
  constructor(calculadora, display) {
    this.calculadora = [...document.querySelector(calculadora).children];
    this.display = document.querySelector(display);
  }

  init() {
    return this;
  }
}
