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

  isNumber(event) {
    if (!event.target.classList.contains("display")) {
      const numero = event.target.innerText;
      const displayText = this.display.innerText;
      displayText === "0"
        ? (this.display.innerText = numero)
        : (this.display.innerText += numero);
    }
  }

  isOperator(event) {
    const operador = event.target.dataset.operador;
    const sinal = event.target.innerText;
    switch (operador) {
      case "adicao":
        this.display.innerText += sinal;
        break;
      case "subtracao":
        this.display.innerText += sinal;
        break;
      case "multiplicacao":
        this.display.innerText += sinal;
        break;
      case "divisao":
        this.display.innerText += sinal;
        break;
      case "decimal":
        this.display.innerText += sinal;
        break;
      case "limpar":
        this.display.innerText = 0;
        break;
      case "calcular":
        const displayFormatado = this.display.innerText
          .replace("x", "*")
          .replace("÷", "/");
        this.display.innerText = eval(displayFormatado);
        break;
    }
  }

  addEvents() {
    this.calculadora.forEach((item) => {
      item.addEventListener("click", this.onClick);
    });
  }

  bind() {
    this.onClick = this.onClick.bind(this);
    this.isNumber = this.isNumber.bind(this);
    this.isOperator = this.isOperator.bind(this);
  }

  init() {
    this.bind();
    this.addEvents();
    return this;
  }
}
