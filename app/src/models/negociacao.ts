export class Negociacao {
    constructor(
         private _data: Date,
         public readonly quantidade: number, 
         public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return this._data;
    }

    public static criaDe(dateString: string, qunatidadeString: string, valorString: string) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantidade = parseInt(qunatidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}