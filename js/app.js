// Desenvolvido por Elton Gaúna Galera em 18/04/2025
// HTML e CSS fornecido pela escola ALURA. Todos os direitos reservados.
// JavaScript desenvolvido com os conhecimentos adquiridos nos Cursos de JavaScript ministrados pela Alura.

let pistaInicial = 100;
let qtde_pista = document.getElementById('qtd-pista');
qtde_pista.textContent = `${pistaInicial}`;

let superiorInicial = 200;
let qdte_superior = document.getElementById('qtd-superior');
qdte_superior.textContent = `${superiorInicial}`;

let inferiorInicial = 400;
let qdte_inferior = document.getElementById('qtd-inferior');
qdte_inferior.textContent = `${inferiorInicial}`;

function temIngresso(tipo, qtde) {
  if (tipo == 'pista') {
    //verifica a exixtencia ainda de ingressos
    if (qtde <= pistaInicial) {
      //decrementa a quantidade do total
      pistaInicial -= qtde;
      //exibe quantidade atualizada
      qtde_pista.textContent = pistaInicial;
      alert('Compra realizada com sucesso!');
    } else {
      alert('Quantidade solicitada maior que a quantidade disponível!');
    }
  }
  if (tipo == 'inferior') {
    if (qtde <= inferiorInicial) {
      inferiorInicial -= qtde;
      qdte_inferior.textContent = inferiorInicial;
      alert('Compra realizada com sucesso!');
    } else {
      alert('Quantidade solicitada maior que a quantidade disponível!');
    }
  }
  if (tipo == 'superior') {
    if (qtde <= superiorInicial) {
      superiorInicial -= qtde;
      qdte_superior.textContent = superiorInicial;
      alert('Compra realizada com sucesso!');
    } else {
      alert('Quantidade solicitada maior que a quantidade disponível!');
    }
  }
}

function comprar() {
  // recupera o valor da opçao
  let tipoIngresso = document.getElementById('tipo-ingresso').value;
  //recupera a quantidade informada
  let qtdeIngresso = parseInt(document.getElementById('qtd').value);
  //verifica a quantidade de ingressos
  if (qtdeIngresso > 10) {
    confirm('Quantidade elevada de ingressos. Máximo 10 unidades por compra');
  } else if (isNaN(qtdeIngresso) || qtdeIngresso <= 0) {
    confirm('Quantidade informada inválida');
  } else {
    //se o tipo do ingresso for qualquer uma das opçoes
    if (['pista', 'inferior', 'superior'].includes(tipoIngresso)) {
      // chama a funçao passando o tipo e a quantidade
      temIngresso(tipoIngresso, qtdeIngresso);
    } else {
      alert('Tipo de ingresso inexistente');
    }
  }
}
