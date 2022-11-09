var pacientes = document.querySelectorAll(".paciente");
var table = document.querySelector("table");
table.addEventListener("dblclick", function(){
    var alvoEvento= event.target;
    var paiAlvo = alvoEvento.parentNode;
    paiAlvo.classList.add("fadeOut");
    setTimeout(function(){
        paiAlvo.remove();
    },1000);

    });
