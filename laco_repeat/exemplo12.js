const notas = [-1, -3, 8];
let indice = 0;
let nota = notas[indice];

while (nota < 0) {
  console.log("Nota invalida!");
  indice++;
  nota = notas[indice];
}

console.log("Nota registrada com sucesso!");0