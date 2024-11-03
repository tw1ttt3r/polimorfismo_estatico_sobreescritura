import Figura from "./Figura.mjs";

class Cuadrado extends Figura {
    
    constructor() {
        super();
    }

    calculaPerimetro(lado) {
        console.log(`Calculo del Perimetro: ${lado*4}`);
    }
    calculaArea(lado) {
        console.log(`Calculo del Area: ${lado*lado}`);
    }
}

export default Cuadrado;