const comandos = ["a", "b", "s"];
let indice = 0;
let comando = "";

while (comando !== "s") {
  console.log("=== PAINEL ===");
  console.log("a -  Abrir relatório");
  console.log("b - Mostrar lembrete");
  console.log("s - Sair");

  comando = comandos[indice];
  indice++;

  if (comando === "a") {
    console.log("Relatório aberto!");
  }

  if (comando === "b") {
    console.log("  Não esqueça de revisar o conteúdo!");
  }

  if (comando === "s") {
    console.log(" Encerrando o Painel.");
  }
}