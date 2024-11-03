import Figura from "./Figura.mjs";

class Rectangulo extends Figura {

    constructor() {
        super();
    }

    calculaPerimetro(base, altura) {
        console.log(`Calculo del Perimetro: ${(base*2)+(altura*2)}`);
    }
    calculaArea(base, altura) {
        console.log(`Calculo del Area: ${base*altura}`);
    }
}

export default Rectangulo;