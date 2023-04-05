function toggleTexto() {
    var ckb2 = document.getElementById("ckb2");
    var ckb3 = document.getElementById("ckb3");

    var post_resposta2 = document.getElementById("post-resposta2");
    var post_resposta3 = document.getElementById("post-resposta3");

    
    if (ckb2.checked) {
        post_resposta2.style.display = "block";
    
       
    } else {
        post_resposta2.style.display = "none";
    }
    if (ckb3.checked) {
        post_resposta3.style.display = "block";
    
    } else {
        post_resposta3.style.display = "none";
    }
}

// Adiciona o evento onchange ao checkbox
var ckb2 = document.getElementById("ckb2");
ckb2.onchange = toggleTexto;

var ckb3 = document.getElementById("ckb3");
ckb3.onchange = toggleTexto;


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
