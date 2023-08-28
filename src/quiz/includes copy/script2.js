document.getElementById("reiniciar").addEventListener("click", function() {
    var checkboxes = document.getElementsByName("opcao");
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
      document.getElementById("correta1").style.color="#404040";
      document.getElementById("incorreta3").style.color="#404040";
      document.getElementById("incorreta1").style.color="#404040";
      document.getElementById("incorreta2").style.color="#404040";
      div1.style.display = "none";
      div2.style.display = "none";
    }
  });
  
  const checkboxes = document.getElementsByName("opcao");
  var div1 = document.getElementById("minhaDiv1");
  var div2 = document.getElementById("minhaDiv2");

  
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", function() {
      if (checkboxes[0].checked) {
        document.getElementById("incorreta1").style.color="red";
        div2.style.display = "block";
        div1.style.display = "none";

      
      }else if(checkboxes[1].checked){
        document.getElementById("correta1").style.color="green";
        div1.style.display = "block";
        div2.style.display = "none";
      
      }
      else if(checkboxes[2].checked){
       
        document.getElementById("incorreta2").style.color="red";
        div2.style.display = "block";
        div1.style.display = "none";
      
      }
      else if(checkboxes[3].checked){
        document.getElementById("incorreta3").style.color="red";
        div2.style.display = "block";
        div1.style.display = "none";
      }
   
     
    });
  }
