//RESULTADO.HTML
function mostrarMensaje(){
    //obtener el score de localstorage de script.js
    let score = localStorage.getItem('score');
    score = parseInt(score); //para controlar que sea un numero;
    /* console.log(score); */
    
    let divResultado = document.getElementById('resultado');
    let mensajeResultado = document.getElementById('mensajeResultado');
    let resultadoScore = document.getElementById('resultadoScore');

    //mensaje
    if(score <= 4){
        mensajeResultado.innerHTML = 'DEBERÍAS <b>NO</b> DORMIRTE VIENDO ANIME';
        resultadoScore.innerHTML = `Tu resultado fue de <b>${score}</b> aciertos`;
        divResultado.classList.add('resultado0-4');
    }else if(score <= 6){
        mensajeResultado.innerHTML = 'DEBERÍAS DEJAR DE VER ANIME EN ESPAÑOL';
        resultadoScore.innerHTML = `Tu resultado fue de <b>${score}</b> aciertos`;
        divResultado.classList.add('resultado5-6');
    }else if(score <= 9){
        mensajeResultado.innerHTML = 'VEO QUE ASPIRAS A SER <b>HOKAGE</b>';
        resultadoScore.innerHTML = `Tu resultado fue de <b>${score}</b> aciertos`;
        divResultado.classList.add('resultado7-9');
    }else if(score == 10){
        mensajeResultado.innerHTML = '<b>海賊王 (kaizoku-o)</b>';
        resultadoScore.innerHTML = `Tu resultado fue de <b>${score}</b> aciertos`;
        divResultado.classList.add('resultado10');
    }

    //limpiar resultado a los 7 segundos
    setTimeout(()=>{
        divResultado.innerHTML = ''; //limpiar todo el resultado
        mostrarTextoEfecto();
    }, 10000);

}
//funcion mostrarTexto con efecto escribir
function mostrarTextoEfecto(){
    let divResultado = document.getElementById('resultado');
    let mensajeResultado = document.getElementById('mensajeResultado');
    let resultadoScore = document.getElementById('resultadoScore'); 

    //Mensaje
    let nuevoTexto = '¡GRACIAS POR JUGARLO!';

    //limpiar contenido e imagen
    divResultado.innerHTML = '';
    divResultado.style.backgroundImage = 'none';
    divResultado.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';

    //poner texto en efecto maquina escribir
    divResultado.innerHTML = '<div class="efectoEscribir" id="mensajeResultado"></div>'; 
    mensajeResultado = document.getElementById('mensajeResultado');
    let i = 0;

    // Función para mostrar el texto letra por letra con mayor velocidad
    function escribir() {
        if (i < nuevoTexto.length) {
            mensajeResultado.innerHTML += nuevoTexto.charAt(i);
            i++;
            setTimeout(escribir, 100); // Aumentamos el valor aquí a 200ms para hacer más lento el efecto de máquina de escribir
        }
    }

    escribir();
}




mostrarMensaje();