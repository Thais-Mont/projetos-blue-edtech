const colors = require("colors"); //instalar no terminal npm install colors para visualizar melhor o projeto
const prompt = require("prompt-sync")();
console.log();

//ATRIBUTOS PERSONAGEM
let personagem = {
  pista: 0,
  inteligencia: 0,
  destreza: 0,
  estamina: 0,
  periodo: "",
  horas: 08,
  dia: 0,
  atualizarAtributos: function (atributosBasicos) {
    this.pista += atributosBasicos.pista;
    this.inteligencia += atributosBasicos.inteligencia;
    this.destreza += atributosBasicos.destreza;
    this.estamina += atributosBasicos.estamina;
    console.log(
      `Pistas: ${this.pista} | Inteligencia: ${this.inteligencia} | Destreza: ${this.destreza} | Estamina: ${this.estamina}
    `.yellow
    );
  },

  atributosAtuais: function () {
    return `
    Pistas: ${this.pista} | inteligencia: ${this.inteligencia} | destreza: ${this.destreza} | estamina: ${this.estamina}
    `.yellow;
  },

  avancarDia: function (dia) {
    this.dia = this.dia + dia;
    if (this.dia == 1) {
      console.log(
        `Você está no Dia ${this.dia}.
      Restam dois dias para resolver o mistério.
      `.bold
      );
    } else if (this.dia == 2) {
      console.log(
        `Você está no Dia ${this.dia}. 
      É melhor se apressar, o tempo está passando.
      `.bold
      );
    } else if (this.dia == 3) {
      console.log(
        `Você está no Dia ${this.dia}.
     Não temos mais tempo, você precisa descobrir o que está acontecendo.
     `.bold
      );
    }
  },

  avancarHoras: function (horas) {
    this.horas += horas;
    if (this.horas >= 19) {
      this.periodo = "Noite";
    } else if (this.horas >= 12) {
      this.periodo = "Tarde";
    } else if (this.horas >= 6) {
      this.periodo = "Manhã";
    } else {
      this.periodo = "Madrugada";
    }
    console.log(`Estamos no período da: ${this.periodo}`.bold);
  },
};

function atributosBasicos(inteligencia, destreza, estamina, pista) {
  this.inteligencia = inteligencia;
  this.destreza = destreza;
  this.estamina = estamina;
  this.pista = pista;
}

//Explicando a história para o usuário/jogador;

let jogador = prompt(
  "Bem vindo a Ilha Nascar, qual o seu nome?  ".italic
).toUpperCase();

// PERGUNTAS DIA 01

let perg0 = `-----------------------------------------------------------------------------

  Desembarcando do barco, você tem dois caminhos a seguir:

  1- Ir diretamente ao velório;
  2- Ir à praia onde ocorreu o acidente;`;

let perg1 = `-----------------------------------------------------------------------------
  Você anda por todos os lados, mas é como se nada tivesse acontecido ali.
  A paisagem é a mesma de um ano atrás, e a única diferença é que Ana não
  faz e nunca mais fará parte dela.
  Você avista duas meninas conversando. 
  Gostaria de falar com elas? 

  1- Sim.
  2- Não.`;

let perg2 = `-----------------------------------------------------------------------------
  ${jogador}: Olá meninas. Vocês moram aqui na Ilha?

  Menina01: Não não, estamos apenas passando as férias por aqui.
  (Você nota algo brilhante na mão dela).

  ${jogador}: Desculpa perguntar, mas o que é isso na sua mão?

  Menina02: Eu achei esse colar ali nas pedras, vou tentar encontrar a dona.

  ${jogador}: Por acaso nele está escrito Ana?

  Você conseguiu uma pista.
  `;

let perg3 = `Está tarde agora, você precisa ir pra casa descansar. Amanhã será um longo dia.`;

let perg4 = `-----------------------------------------------------------------------------
  Chegando no velório...
  O clima aqui não está dos melhores.
  Se bem que nenhum velório tem um bom clima. Mas tem algo diferente no ar.
  Sinto olhares desconfiados. Você consegue sentir?
  Existem dois grupos que chamam mais atenção. De um lado os policiais estão
  conversando com sr. Jhon, pai de Ana, e no outro seus amigos que estudavam
  com ela.

  Você deve escolher: 

  1- Se aproximar dos policiais que estão conversando com Jhon.
  2- Ir até o seu grupo de amigos. `;

let perg5 = ` -----------------------------------------------------------------------------
  Acho que não foi uma boa escolha ${jogador}, eles estão apenas conversando sobre como é 
  triste uma menina tão nova partir dessa forma.
  Te convencem a ir até um restaurante pra comer algo, e você acaba perdendo um dia.
  `;

let perg6 = ` -----------------------------------------------------------------------------
  Policial Marcos: Sim Jhon, isso terá que ficar entre nós, e não pode se espalhar, temos que
  evitar o pânico na ilha.

  Jhon: Nós não conseguiremos esconder isso pra sempre Marco e você sabe disso.

  Jhon se afasta.

  Você deve escolher:

  1-Segui-lo até em casa e ver o que está acontecendo;
  2-Puxar assunto com Jhon e tentar descobrir algo;
  `;

let perg61 = ` -----------------------------------------------------------------------------
  O senhor Jhon foi diretamente pra casa.
  Mas só passaram longas horas e nada aconteceu.
  Melhor voltar no próximo dia pra ver se teremos mais sucesso. 
  `;

let perg7 = `-----------------------------------------------------------------------------
  ${jogador}: Olá sr. Jhon, eu sinto muito pela Ana, gostaria de estar aqui e ter feito algo pra ajudar.

  Jhon: Eu agradeço pela sua preocupação ${jogador}, mas ninguém conseguiria ajudá-la.

  Você deve escolher:

  1- Como assim sr. Jhon, você sabe de alguma coisa que eu não sei?
  2- Tenho minhas dúvidas senhor... eu poderia ir até a sua casa?
  `;

let perg8 = `-------------------------------------------------------------------------------

  Jhon: Claro ${jogador}, você é sempre bem-vindo(a).
  Ah, antes que eu me esqueça. Acredito que a Ana iria gostar se você ficasse com isso.
  Eu não tenho a chave, mas também não teria coragem de ler, acho que como vocês eram melhores
  amigos (a), ela ficaria feliz.

  ${jogador}: O diário da Ana. Muito obrigado(a) Jhon, não sei nem como agradecer.

  Você conseguiu mais uma pista.
  `;

let perg9 = ` -----------------------------------------------------------------------------
  Jhon: Foi só um modo de dizer filho(a), estou um pouco nervoso é só isso. Estou indo pra casa
  agora, caso queira passar por lá amanhã, poderemos conversar melhor.`;

// PERGUNTAS DIA 02

let perg10 = `-----------------------------------------------------------------------------
  Estamos na frente da casa de Ana agora. Vamos ver se podemos descobrir algo aqui.
  Jhon aparece a porta e lhe convida à entrar.
  A casa está gelada, é possível sentir a tristeza que exala no ar.

  Jhon: Então ${jogador}, o que você gostaria de saber?

  Você deve escolher:

  1-A verdade Jhon, apenas a verdade. A Ana morreu realmente afogada, ou isso é uma grande
  mentira?
  2-Estou realmente muito triste e confuso(a), não consegui dormir a noite toda pensando na Ana.
  Eu... eu poderia ficar um pouco no quarto dela?`;

let perg11 = `-----------------------------------------------------------------------------
  Jhon: Eu não posso te falar nada ${jogador}.. é melhor você esquecer essa história.
  Pegue o próximo barco e saia dessa ilha o quanto antes. Não estamos seguros aqui.
  É só isso que posso lhe dizer... desista de bancar o detetive, e vá pra casa, por favor.`;

let perg12 = `-----------------------------------------------------------------------------
  Entrando no quarto muitas lembranças veem a sua mente...
  Como iria imaginar que sua melhor amiga não estaria mais aqui.
  .
  .
  .
  Mas temos que ter pressa agora. Precisamos encontrar a chave do diário.
  Se algo realmente aconteceu com a Ana, o diário poderá nos dar algumas
  pistas.
  
  (Você conseguiu uma nova pista.)`;

// PERGUNTAS DIA 03

let perg13 = `-----------------------------------------------------------------------------
  É nosso último dia na Ilha.
  Não há mais nada que possamos fazer a partir de agora.
  Só tem uma pessoa que poderia nos ajudar - Policial Marcos.`;

let perg14 = `------------------------------------------------------
  NA DELEGACIA

  ${jogador}: Bom dia Policial Marcos. Eu gostaria de conversar com o senhor.

  Policial Marcos: Olá garoto(a), o que você tem ai?`;

let perg15 = `-----------------------------------------------------------------------------
  Vamos verificar quantas pistas você conseguiu:`;

//------------------------------------------------------------------------------------//

// FINAL 01: NENHUMA PISTA
let perg16 = `-----------------------------------------------------------------------------
  Policial Marcos: ${jogador}, pare de me fazer perder tempo, e por favor vá embora da ilha.

  Nós temos mais o que fazer do que correr atrás de teorias.

  -----------GAME OVER-------------`;

// FINAL 02: 01 PISTA
let perg17 = `-------------------------------------------------------------------------------
  Policial Marcos: ${jogador}, vejo que você descobriu uma porção de coisas ai, não é mesmo?

  E está bem perto de encontrar o culpado.

  Você gostaria de começar novamente e buscar pela última pista?
  `;

// FINAL 03: 02 PISTAS
let perg18 = `-----------------------------------------------------------------------------

  Policial Marcos: ${jogador}, como você conseguiu achar tudo isso?

  Eram as peças que faltavam pra descobrirmos o mistério.

  Infelizmente a Ana se envolveu com pessoas ruins que vieram fazer

  turismo na ilha, e acabou descobrindo uma quadrilha de tráficos,

  ela tentou nos avisar, mas infelizmente à silenciaram antes.

  Mas graças a você ${jogador}, com o diário da Ana temos provas o suficiente

  para mandá-los para prisão.

  PARABÉNS você foi um ótimo detetive.

  `;
//------------------------------------------------------------------------------------//
// CRIANDO VARIÀVEIS

let dia00; //Primeira Escolha: Velório ou Praia - perg0 (ação1(perg4-0) ou ação2(perg1-0))
let acao1; //Velório - perg4 (ação3(perg6-1,1,1,0) ou ação 4(perg5-0))
let acao2; //Praia - perg1 (acao9(perg2-1,1,1,0) ou acao10(perg3-0))
let acao3; //Policiais - perg6 (ação5(perg61-0) ou ação6(perg7-0))
let acao4; //Amigos - perg5 (dia02)
let acao5; //Seguir em casa (dia02)
let acao6; //Conversar Jhon - perg7 (ação7(perg9-0) ou ação8(perg8 +1pista-1,1,1,1))
let acao7; //Insistir - perg9 (dia02-0)
let acao8; //Autoconvite - perg8 (dia02-0)
let acao9; // Conversa meninas - perg2 (dia02 1,1,1,1+pista)
let acao10; //Ir pra casa - perg3 (dia02-0)

let dia01; //Casa Ana - perg10 (ação11(perg11-0) ou ação12(perg12-1-1-1-1+pista))
let acao11; //Negativa Jhon - perg11 (dia03)
let acao12; //Quarto Ana - perg12 (dia03 1,1,1+pista)

let dia02; //Dia 03 - perg13 (perg14)
let dia03; //Contagem de pistas (perg15)
//SE 0 PISTAS - PERG16 //SE 1 PISTA - PERG17 //SE 2 PISTAS - PERG18 //

//------------------------------------------------------------------------------------//
// EXECUTANDO AÇÕES

dia03 = {
  pergunta: perg14,
  respostas: [
    new atributosBasicos(0, 0, 0, 0),
    new atributosBasicos(0, 0, 0, 0),
  ],
  tempoDia: [1, 0],
  tempoHoras: [0, 0],
  proximaPergunta: [null, null],
};

dia02 = {
  pergunta: perg13,
  respostas: [
    new atributosBasicos(0, 0, 0, 0),
    new atributosBasicos(0, 0, 0, 0),
  ],
  tempoDia: [0, 0],
  tempoHoras: [0, 0],
  proximaPergunta: [null, null],
};

acao12 = {
  pergunta: perg12,
  respostas: [
    new atributosBasicos(0, 0, 0, 0),
    new atributosBasicos(0, 0, 0, 0),
  ],
  tempoDia: [1, 0],
  tempoHoras: [0, 0],
  proximaPergunta: [null, null],
};

acao11 = {
  pergunta: perg11,
  respostas: [
    new atributosBasicos(0, 0, 0, 0),
    new atributosBasicos(0, 0, 0, 0),
  ],
  tempoDia: [1, 1],
  tempoHoras: [0, 0],
  proximaPergunta: [null, null],
};

dia01 = {
  pergunta: perg10,
  respostas: [
    new atributosBasicos(0, 0, 0, 0),
    new atributosBasicos(1, 1, 1, 1),
  ],
  tempoDia: [0, 0],
  tempoHoras: [4, 5],
  proximaPergunta: [acao11, acao12],
};

acao10 = {
  pergunta: perg3,
  respostas: [
    new atributosBasicos(0, 0, 0, 0),
    new atributosBasicos(0, 0, 0, 0),
  ],
  tempoDia: [1, 1],
  tempoHoras: [0, 0],
  proximaPergunta: [null, null],
};

acao9 = {
  pergunta: perg2,
  respostas: [
    new atributosBasicos(0, 0, 0, 0),
    new atributosBasicos(0, 0, 0, 0),
  ],
  tempoDia: [1, 1],
  tempoHoras: [0, 0],
  proximaPergunta: [null, null],
};

acao8 = {
  pergunta: perg8,
  respostas: [
    new atributosBasicos(0, 0, 0, 0),
    new atributosBasicos(0, 0, 0, 0),
  ],
  tempoDia: [1, 1],
  tempoHoras: [0, 0],
  proximaPergunta: [null, null],
};

acao7 = {
  pergunta: perg9,
  respostas: [
    new atributosBasicos(0, 0, 0, 0),
    new atributosBasicos(0, 0, 0, 0),
  ],
  tempoDia: [1, 1],
  tempoHoras: [0, 0],
  proximaPergunta: [null, null],
};

acao6 = {
  pergunta: perg7,
  respostas: [
    new atributosBasicos(0, 0, 0, 0),
    new atributosBasicos(1, 1, 1, 1),
  ],
  tempoDia: [0, 0],
  tempoHoras: [2, 3],
  proximaPergunta: [acao7, acao8],
};

acao5 = {
  pergunta: perg61,
  respostas: [
    new atributosBasicos(0, 0, 0, 0),
    new atributosBasicos(0, 0, 0, 0),
  ],
  tempoDia: [0, 0],
  tempoHoras: [0, 0],
  proximaPergunta: [null, null],
};

// 22hr - Noite
acao4 = {
  pergunta: perg5,
  respostas: [
    new atributosBasicos(0, 0, 0, 0),
    new atributosBasicos(0, 0, 0, 0),
  ],
  tempoDia: [1, 1],
  tempoHoras: [0, 0],
  proximaPergunta: [null, null],
};

// 18hr - Tarde
acao3 = {
  pergunta: perg6,
  respostas: [
    new atributosBasicos(0, 0, 0, 0),
    new atributosBasicos(0, 0, 0, 0),
  ],
  tempoDia: [0, 0],
  tempoHoras: [4, 0],
  proximaPergunta: [acao5, acao6],
};

// 16hr - Tarde
acao2 = {
  pergunta: perg1,
  respostas: [
    new atributosBasicos(1, 1, 1, 1),
    new atributosBasicos(0, 0, 0, 0),
  ],
  tempoDia: [0, 0],
  tempoHoras: [0, 5],
  proximaPergunta: [acao9, acao10],
};

// 14hr - Tarde
acao1 = {
  pergunta: perg4,
  respostas: [
    new atributosBasicos(1, 1, 1, 0),
    new atributosBasicos(0, 0, 0, 0),
  ],
  tempoDia: [0, 0],
  tempoHoras: [4, 8],
  proximaPergunta: [acao3, acao4],
};

// Começa as 08hr - Manhã
dia00 = {
  pergunta: perg0,
  respostas: [
    new atributosBasicos(1, 1, -1, 0),
    new atributosBasicos(1, 1, 1, 0),
  ],
  tempoDia: [0, 0],
  tempoHoras: [6, 8],
  proximaPergunta: [acao1, acao2],
};

//EXECUÇÃO DO JOGO

function fazerPergunta(acao) {
  //Faz pergunta
  console.log(acao.pergunta.italic);
  console.log();
  //Cria váriavel para armazenar resposta
  let resposta;
  while (true) {
    //Caso dentro dos indices de escolha não tenham opções
    if (acao.proximaPergunta[0] == null && acao.proximaPergunta[1] == null) {
      prompt("(digite enter para prosseguir)".gray.italic);
      personagem.horas = 8;
      return 0;
    }
    resposta = +prompt(`Digite 1 ou 2 para opção escolhida: `.bold);
    //Caso resposta usuário for diferente de 1 ou 2
    if (resposta != "1" && resposta != "2") {
      console.log("Resposta inválida: Digite 1 ou 2");
      continue;
    }
    break;
  }
  console.clear();
  //Retorna resposta pra ser usada na função executarAcao()
  return resposta;
}

function executarAcao(acao) {
  //Escolha de opção
  let opcaoEscolhida = parseInt(fazerPergunta(acao)) - 1;
  if (opcaoEscolhida == -1) {
    console.clear();
    personagem.atualizarAtributos(new atributosBasicos(0, 0, 0, 0));
    return;
  }
  //Pegar resposta e aplicar atributos ao jogador
  let atributosAtualizar = acao.respostas[opcaoEscolhida];
  personagem.atualizarAtributos(atributosAtualizar);
  let diasAtualizar = acao.tempoDia[opcaoEscolhida];
  personagem.avancarDia(diasAtualizar);
  let horasAtualizar = acao.tempoHoras[opcaoEscolhida];
  personagem.avancarHoras(horasAtualizar);
  //Verificar se existe um caminho para resposta, caso sim executar
  if (acao.proximaPergunta[opcaoEscolhida] != null) {
    executarAcao(acao.proximaPergunta[opcaoEscolhida]);
  }
}

function finaljogo() {
  console.log(perg15);
  console.log();
  //Retorna ao usuário quantidade de pistas resgatadas
  console.log(
    `Você conseguiu um total de ${personagem.pista} pistas`.yellow.bold
  );
  console.log();
  if (personagem.pista == 0) {
    console.log(perg16);
  } else if (personagem.pista == 1) {
    console.log(perg17);
  } else {
    console.log(perg18);
  }
}

//FUNÇÕES

function resetarJogo() {
  personagem.inteligencia = 0;
  personagem.destreza = 0;
  personagem.estamina = 0;
  personagem.pista = 0;
  personagem.dia = 0;
  personagem.horas = 8;
}

//

let dias = [dia00, dia01, dia02, dia03];

while (true) {
  console.clear();
  resetarJogo();

  console.log(
    "‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗"
  );

  console.log(
    `
    -----------------------------------------------------------------------------------------
    Você acabou de chegar na Ilha Nascar, para o velório de Ana, uma amiga de infância.
    Ela morreu afogada ao tentar salvar uma criança de um possível afogamento.
    Ou pelo menos, era o que todos pensavam...

    Daqui pra frente, tudo dependerá única e exclusivamente das suas escolhas ${jogador}.
    Sugiro que pense bem antes de tomá-las.
    Você só tem 3 dias...

    ╔═════════════════════════════════════════════════════════════════════════╗
    ${personagem.atributosAtuais()} 
    ╚═════════════════════════════════════════════════════════════════════════╝
`.italic
  );

  for (let i = 0; i < dias.length; i++) {
    personagem.avancarDia(1);
    personagem.avancarHoras(0);
    executarAcao(dias[i]);
  }

  finaljogo();
  console.log();

  let jogarNovamente = prompt(
    "Você gostaria de jogar novamente? "
  ).toLowerCase();

  if (jogarNovamente != "sim" && jogarNovamente != "s") {
    break;
  }
}
