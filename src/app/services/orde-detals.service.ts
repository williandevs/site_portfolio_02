import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdeDetalsService {

  constructor() { }



  serviceDetails = [

    {
      id: 1,
      serviceNome: "CRIAÇÕES DE SITE E BLOG",
      serviceDetals: " Design personalizado, otimizado para o Google, responsivo e com formulário de contato inteligente.",
      servicePrice: 1200,
      serviceImg: 'https://agencia.williamdev.com.br/assets/image/loja-virtual.png'
    },
    {
      id: 2,
      serviceNome: "CRIAÇÃO DE LOJA VIRTUAL",
      serviceDetals: "Tenha uma loja virtual que converte cliques em venda, totalmente otimizada para seu negócio, com integração com rede sociais. E e-mail marketing. ",
      servicePrice: 4500,
      serviceImg: 'https://agencia.williamdev.com.br/assets/image/ecommece.png'
    },
    {
      id: 3,
      serviceNome: "AUTOMAÇÃO DE PROCESSOS",
      serviceDetals: "Tenha uma loja virtual que converte cliques em venda, totalmente otimizada para seu negócio, com integração com rede sociais. E e-mail marketing. ",
      servicePrice: 6500,
      serviceImg: 'https://agencia.williamdev.com.br/assets/image/solucoes.png'
    },
    {
      id: 4,
      serviceNome: "E-MAIL PROFISSIONAL",
      serviceDetals: "Tenha uma loja virtual que converte cliques em venda, totalmente otimizada para seu negócio, com integração com rede sociais. E e-mail marketing. ",
      servicePrice: 100,
      serviceImg: 'https://agencia.williamdev.com.br/assets/image/email.png'
    },

  ]


}
