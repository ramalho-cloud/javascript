let total = 0;
const vendas = [12, 7, 4, 0];
let indice = 0;
let valor = vendas[indice];

while (valor !== 0) {
  total = total + valor;
  indice++;
  valor = vendas[indice];
}

console.log("Total vendido: " + total);