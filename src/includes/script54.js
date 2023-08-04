
function verificarRespostas6() {
    var tabela6 = document.getElementById("respostas6");
    var respostas6 = tabela6.getElementsByClassName("resposta6");
    var corretas6 = 0;
    var respostasCorretas6 = [
      ["5","3", "2", "6", "1", "4"]
    ];
  
   
  
    for (var i = 0; i < respostas6.length; i++) {
      var resposta6 = respostas6[i].value;
      var linha6 = Math.floor(i / 6);
      var coluna6 = i % 6;
  
      if (resposta6 === respostasCorretas6[linha6][coluna6]) {
        respostas6[i].style.backgroundColor = "#cfc"; // Marcar como correta
        corretas6++;
      } else {
        respostas6[i].style.backgroundColor = "#f99"; // Marcar como incorreta
      }
    }
  
    alert("Você acertou " + corretas6 + " respostas.");
  }
  
  
  