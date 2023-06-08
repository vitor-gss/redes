var requisicao = new XMLHttpRequest(); // cria um novo objeto
var documento

requisicao.onreadystatechange = function (){ // quando mudar o estado do objeto, chama uma função.
    if(requisicao.readyState == 4 && requisicao.status == 200){ // se o estado atual for 4
        documento = requisicao.response
        console.log(documento)
    }
}
requisicao.open("GET", "https://www2.ifal.edu.br"); // Pega (GET) as informações do site
requisicao.send(); // Enviar a requisição