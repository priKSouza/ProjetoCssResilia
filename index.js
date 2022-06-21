const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const finish = [];

const result = () => {
  rl.question(
    "Digite propriedades CSS da sua lista ou Sair para encerrar: ",
    (resposta) => {
      if (resposta == "Sair" || resposta == "SAIR" || resposta == "sair") {
        console.log("Sua lista: " + finish.sort().join('\n'));
        return rl.close();
      } else {
        finish.push(resposta);
      }
      result();
    }
  );
};

result();
