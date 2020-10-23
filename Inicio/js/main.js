let ubicacionPrincipal = window.pageYOffset; /* devuelve el id de la sección de la pagina */

AOS.init(); //> Inicializamos la libreria enlazada en el html.

window.addEventListener("scroll", function(){

    let desplazamientoActual = window.pageYOffset; //100

    if(ubicacionPrincila == desplazamientoActual){ // 0>100
        document.getElementsByTagName("nav")[0].style.top = "0";
    }
    else{
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
    ubicacionPrincipal = desplazamientoActual; // = 100

    //console.log(ubicacionPrincila)
})



/* Menú */

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
semaforo = true;

document.querySelectorAll(".hamburger")[0].addEventListener("click", function(){

    if (semaforo){
        document.querySelectorAll(".hamburger")[0].style.color = "#fff";
        semaforo = false;
    }
    else{
        document.querySelectorAll(".hamburger")[0].style.color = "#000";
        semaforo = true;
    }

    enlacesHeader.classList.toggle("menudos");
})















