function toggleTexto() {
    var ckb1 = document.getElementById("ckb1");
    var ckb2 = document.getElementById("ckb2");
    var ckb3 = document.getElementById("ckb3");
    var ckb4 = document.getElementById("ckb4");

    var resposta1 = document.getElementById("resposta1");
    var resposta2 = document.getElementById("resposta2");
    var resposta3 = document.getElementById("resposta3");
    var resposta4 = document.getElementById("resposta4");
    var instrucao = document.getElementById("instrucao");
    
    if (ckb1.checked) {
       resposta1.style.display = "block";
       instrucao.style.display = "none";
    
    } else {
        resposta1.style.display = "none";
    }
    if (ckb2.checked) {
        resposta2.style.display = "block";
        instrucao.style.display = "none";
       
    } else {
        resposta2.style.display = "none";
    }
    if (ckb3.checked) {
        resposta3.style.display = "block";
        instrucao.style.display = "none";

    } else {
       resposta3.style.display = "none";
    }
    if (ckb4.checked) {
        resposta4.style.display = "block";
        instrucao.style.display = "none";

    } else {
        resposta4.style.display = "none";
        
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


var opcoes = document.getElementsByName("opcao");
		for (var i = 0; i < opcoes.length; i++) {
			opcoes[i].addEventListener("click", function() {
				// Desmarca todos os outros checkbox
				for (var j = 0; j < opcoes.length; j++) {
					if (opcoes[j] != this) {
						opcoes[j].checked = false;
					}
				}
			});
		}
