import { Comparavel } from "../interfaces/comparavel.js";
import { imprimivel } from "../utils/imprimivel.js";

export class Negociacao implements imprimivel, Comparavel<Negociacao> {
    constructor(
         private _data: Date,
         public readonly quantidade: number, 
         public readonly valor: number
    ) {}

    public static criaDe(dateString: string, qunatidadeString: string, valorString: string) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantidade = parseInt(qunatidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return this._data;
    }

    public paraTexto(): string {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }

    public ehigual(negociacao: Negociacao): boolean {
        return this.data.getDate() == negociacao.data.getDate()
        && this.data.getMonth() === negociacao.data.getMonth()
        && this.data.getFullYear() === negociacao.data.getFullYear();
    }

}