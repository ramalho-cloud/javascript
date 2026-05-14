const respostas = ["azul", "Verde", "Laranja"];
let indice = 0;
let cor = respostas[indice];

while (cor !== "Laranja") {
  console.log("Resposta errada tente de novo!");
  indice++;
  cor = respostas[indice];
}

console.log("Cor correta!");