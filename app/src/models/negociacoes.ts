import { Comparavel } from "../interfaces/comparavel.js";
import { imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements imprimivel, Comparavel<Negociacoes>{

   private negociacoes: Negociacao[] = []; 

   public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
   }

   public lista():  readonly Negociacao[] {
    return this.negociacoes;
   }

   public paraTexto(): string {
      return JSON.stringify(this.negociacoes, null, 2);
   }
   public ehigual(objeto: Negociacoes): boolean {
      return JSON.stringify(this.negociacoes) === JSON.stringify(objeto)
   }
}
