class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoDeOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signo = {
            suma: '+',
            resta: '-',
            multiplicacion: 'x',
            division: '/'
        }
    }
    borrar(){
        this.valorActual = this.valorActual.slice(0,-1);
        this.imp();
    }
    clear(){
        this.valorAnterior = '';
        this.valorActual = '';
        this.tipoDeOperacion = undefined;
        this.imp();
    }
    computar(tipo) {
        this.tipoDeOperacion !== 'igual' && this.calcular();
        this.tipoDeOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imp();
    }
    aggNumeros(numero){
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imp();
    }
    imp(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signo[this.tipoDeOperacion] || ' ' } ${this.valorActual}`;
    }
    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculador[this.tipoDeOperacion](valorAnterior, valorActual);
        this.valorAnterior = '';
        this.tipoDeOperacion = undefined;
        this.imp();
    }
    
}