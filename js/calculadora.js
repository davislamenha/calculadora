export default class Calculadora {
  constructor(calculadora, display) {
    this.calculadora = [...document.querySelector(calculadora).children];
    this.display = document.querySelector(display);
  }

  onClick(event) {
    !event.target.dataset.operador
      ? this.isNumber(event)
      : this.isOperator(event);
  }

  addEvents() {
    this.calculadora.forEach((item) => {
      item.addEventListener("click", this.onClick);
    });
  }

  bind() {
    this.onClick = this.onClick.bind(this);
  }

  init() {
    return this;
  }
}
