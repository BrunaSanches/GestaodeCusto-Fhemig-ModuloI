function toggleTexto() {
    var ckb1 = document.getElementById("ckb1");
    var ckb2 = document.getElementById("ckb2");
    var ckb3 = document.getElementById("ckb3");
    var ckb4 = document.getElementById("ckb4");



    var resposta1 = document.getElementById("resposta1");
    var resposta2 = document.getElementById("resposta2");
    var resposta3 = document.getElementById("resposta3");
    var texto1 = document.getElementById("texto-1");
   
    
    if (ckb1.checked) {
       resposta1.style.display = "block";
    
    } else {
        resposta1.style.display = "none";
    }
    if (ckb2.checked) {
        resposta2.style.display = "block";
        
    } else {
        resposta2.style.display = "none";
    }
    if (ckb3.checked) {
        resposta3.style.display = "block";
      

    } else {
       resposta3.style.display = "none";
    }
    if (ckb4.checked) {
        texto1.style.display = "block";
      

    } else {
       texto1.style.display = "none";
    }
    
}

// Adiciona o evento onchange ao checkbox
var ckb1 = document.getElementById("ckb1");
ckb1.onchange = toggleTexto;

var ckb2 = document.getElementById("ckb2");
ckb2.onchange = toggleTexto;

var ckb3 = document.getElementById("ckb3");
ckb3.onchange = toggleTexto;

var ckb4 = document.getElementById("ckb4");
ckb4.onchange = toggleTexto;
