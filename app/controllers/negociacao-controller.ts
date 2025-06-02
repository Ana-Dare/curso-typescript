import { Negociacao } from "../models/negociacao.js";

export class Negociacaocontroller {
    private inputData;
    private inputQuantidade;
    private inputValor;

    constructor() {
        this.inputData =  document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor =  document.querySelector('#valor') as HTMLInputElement;
    }

    adiciona(): void {
    const negociacao = this.criaNegociacao();
    console.log(negociacao);
    this.limparFormulario();
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
        
    }
}