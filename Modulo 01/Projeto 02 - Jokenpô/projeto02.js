let prompt = require("prompt-sync")();

console.log();

// Explicação Jokenpô

while (true) {
  console.log(`Olá, você iniciará agora um jogo chamado Jokenpô,
  que consiste na escolha entre 03 (três) elementos, sendo eles: 
  PEDRA 💎, PAPEL 📜 e TESOURA✂️.
  O jogo funciona da seguinte forma:
  - PAPEL ganha de PEDRA;
  - PEDRA ganha de TESOURA;
  - TESOURA ganha de PAPEL;
  E elementos iguais se anulam, gerando empate.
  
  `);

// Iniciando o Jogo

  let jogar = prompt("Agora que você entendeu o jogo... Bora jogar? ").toLowerCase();

  if (jogar != "sim" && jogar !="s") {
    console.log("Tudo bem, nos vemos na próxima!");
    break;
  }

  let elementos = ["pedra", "papel", "tesoura"];

  let numeroRodadas = +prompt(`Quantas rodadas você gostaria de jogar? `);

  let pontosUsuario = 0;
  let pontosMaquina = 0;

  let respostaUsuario;
  let respostaMaquina;

  for (let i = 0; i < numeroRodadas; i++) {
	console.log();

	while(true) {
		respostaUsuario = parseInt(
			prompt(
			  `Escolha um elemento (pedra - 0, papel - 1 ou tesoura - 2): `
			)
		  );
		  if (respostaUsuario != "0" && respostaUsuario != "1" && respostaUsuario != "2") {
			  console.log("Digite 0 , 1 ou 2 como resposta:");
			  continue;
			  }
		break;
	}
    
    respostaMaquina = Math.floor(Math.random() * elementos.length);

    console.log(
      `Sua jogada [${elementos[respostaUsuario]}] X Jogada Máquina [${elementos[respostaMaquina]}]`
    );

    if (respostaUsuario == respostaMaquina) {
      	console.log();
      	console.log("Houve um empate aqui!");
      	console.log();

    } else if (respostaUsuario == 0 && respostaMaquina == 2 || respostaUsuario == 1 && respostaMaquina == 0 || respostaUsuario == 2 && respostaMaquina == 1 ) {
      	console.log();
      	console.log("Uhull! Você venceu essa!");
      	console.log();
      	pontosUsuario++;

    } else {
      	console.log();
      	console.log("Aah que pena...Você perdeu essa rodada!");
      	console.log();
      	pontosMaquina++;
    }
  }

  let placar = "";

  if (pontosUsuario > pontosMaquina) {
    placar = "VENCEU 🏆";
  } else if (pontosUsuario < pontosMaquina) {
    placar = "PERDEU 👎";
  } else {
    placar = "EMPATOU com a Máquina 🙃";
  }

  console.log(`E o placar final ficou em ${pontosMaquina} pontos para Máquina e ${pontosUsuario} pontos para Você.
Sendo assim você ${placar}`);
  console.log();

  let jogarNovamente = prompt("Você gostaria de jogar novamente? ").toLowerCase();

  if (jogarNovamente != "sim" && jogarNovamente != "s") {
    break;
  }

  console.clear();
}
