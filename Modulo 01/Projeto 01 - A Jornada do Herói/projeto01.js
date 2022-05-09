let prompt = require('prompt-sync')();



console.log();

while (true) {
  console.log()
  let nome = prompt("Olá, que bom te ver por aqui, qual seu nome marujo(a)? ")

  console.log(`Hummm...Eu lembro desse nome... 
  Aaaah ${nome}, você é o(a) pirata que saiu em uma jornada há 2 anos em busca de um grande tesouro. 
  Lembro muito bem de você, e tenho muitas perguntas a lhe fazer.E você deve responder apenas com SIM ou NÃO`)
  console.log();

  let somatoria = 0;

  let index = 0;

  let perguntas = [];
  perguntas.push("Você conseguiu formar uma tripulação? ");
  perguntas.push("Certo... Encontrou o mapa escondido? ");
  perguntas.push("E a ilha secreta, você chegou a pisar por lá? ");
  perguntas.push("Entendi...então você passou pelos monstros dos mares? ");
  perguntas.push("E o que mais estou curioso: você achou o tesouro? ");

  while (index < perguntas.length) {
    respostaEscrita = prompt(perguntas[index]).toLowerCase();
    if (respostaEscrita != "sim" && respostaEscrita != "nao") {
      console.log("Digite Sim ou Não como resposta:");
      continue;
    } else if (respostaEscrita == "sim") {
      somatoria++;
    } 
    index++
  }

  if(somatoria > 4) {
    console.log(
      `
      Muito bem meu nobre amigo.
    Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.
    `)
  } else if (somatoria > 3) {
    console.log(
      `
      Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.`);
  } else if (somatoria > 2) {
    console.log(
      `
      Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.`);
  } else if (somatoria > 0) {
    console.log(
      `
      Você falha, mas ainda consegue fugir da situação.`)
  } else {
    console.log(
      `
      Vejo que não conseguiu concluir a missão. Sem convicção, você falhou miseravelmente.`)
  }

  let jogarNovamente = prompt("Você gostaria de jogar novamente? ")

  if (jogarNovamente != "sim") {
    break;
  } 
  
  console.clear();
}