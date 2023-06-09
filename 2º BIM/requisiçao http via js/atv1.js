// var requisicao = new XMLHttpRequest();
// requisicao.open("GET", "https://www2.ifal.edu.br", true);
// // Antes do send e depois do open
// requisicao.setRequestHeader("User-Agent",
//   "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1");
// requisicao.send(null);
// requisicao.onreadystatechange = mudanca;

// function mudanca() {
//   if (requisicao.readyState === 4 && requisicao.status === 200) {
//     document.write(requisicao.responseText);
//   }
// }

var requisicao = new XMLHttpRequest();
requisicao.open("GET", "https://developer.mozilla.org/pt-BR/docs/Web/Guide/AJAX/Getting_Started", true);
requisicao.send(null);
requisicao.onreadystatechange = mudanca;

function mudanca() {
  if (requisicao.readyState === 4 && requisicao.status === 200) {
    document.write(requisicao.responseText);
  }
}