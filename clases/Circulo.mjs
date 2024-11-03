import Figura from "./Figura.mjs";

class Circulo extends Figura {

    radio = null;
    pi = 3.1416;

    constructor(radio) {
        super();
        this.radio = radio
    }

    calculaPerimetro() {
        console.log(`Calculo del Perimetro: ${(2*this.pi)*this.radio}`);
    }
    calculaArea() {
        console.log(`Calculo del Area: ${this.pi*(this.radio*this.radio)}`);
    }
}

export default Circulo;