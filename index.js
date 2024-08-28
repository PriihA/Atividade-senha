const prompt = require('prompt-sync');
const entrada = prompt();

var senha = entrada("Digite a senha: ");

while (senha != "2024"){
  console.log("Senha incorreta. Tente novamente.");
  senha = entrada("Digite a senha: ");
}
while (senha == "2024"){
  console.log("Senha correta. Acesso liberado.");
  break;
}