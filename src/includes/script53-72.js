function exibirDivs() {
    var divs = document.getElementsByClassName("minha-div");
    var i = 0;
    var intervalo = setInterval(function() {
        if (i >= divs.length) {
            clearInterval(intervalo);
            return;
        }
        if (divs[i].style.display === "none") {
            divs[i].style.display = "block";
        }
        i++;
    }, 700);
}