var httpRequest;
httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "https://www2.ifal.edu.br", true);
httpRequest.send(null);
httpRequest.onreadystatechange = mudanca;
function mudanca (){
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          alert(httpRequest.responseText);
        } else {
          alert('There was a problem with the request.');
        }
      }
    }