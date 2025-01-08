document.addEventListener('DOMContentLoaded', () => {
    let preguntaActual = 0; // Índice para las preguntas
    let score = 0; //puntuaje

    let preguntas = [
        {
            pregunta: '¿Quién es el creador de Dragon Ball Z?',
            respuestas: ['Yoshihiro Togashi', 'Masashi Kishimoto', 'Akira Toriyama', 'Eiichiro Oda'],
            respuestaCorrecta: 'Akira Toriyama'
        },
        {
            pregunta: '¿Quién es el creador de One Piece?',
            respuestas: ['Tite Kubo', 'Eiichiro Oda', 'Yoshihiro Togashi', 'Masashi Kishimoto'],
            respuestaCorrecta: 'Eiichiro Oda'
        },
        {
            pregunta: '¿Quién es el capitán de la 11ª división en Bleach?',
            respuestas: ['Kenpachi Zaraki','Ichigo Kurosaki','Rukia Kuchiki','Renji Abarai'],
            respuestaCorrecta: 'Kenpachi Zaraki',
        },
        {
            pregunta: '¿Cómo se llama la técnica de Naruto que invoca un sapo gigante?',
            respuestas: ['Rasengan','Kage Bunshin no Jutsu','Kuchiyose no Jutsu','Chidori'],
            respuestaCorrecta: 'Kuchiyose no Jutsu',
        },
        {
            pregunta: '¿Cómo se llama el primer arco argumental en One Piece?',
            respuestas: ['Arco de Enies Lobby','Arco de Marineford','Arco de Alabasta','Arco de Romance Dawn'],
            respuestaCorrecta: 'Arco de Romance Dawn',
        },
        {
            pregunta: '¿Qué personaje de Hunter x Hunter posee una habilidad llamada "Gyo"?',
            respuestas: ['Killua Zoldyck','Hisoka Morow','Kurapika','Gon Freecss'],
            respuestaCorrecta: 'Kurapika',
        },
        {
            pregunta: '¿Con qué demonio tiene contrato Himeno en Chainsaw man?',
            respuestas: ['Demonio Angel','Demonio Invisible','Demonio Fantasma','Demonio Garra'],
            respuestaCorrecta: 'Demonio Fantasma',
        },
        {
            pregunta: '¿12 horas en la habitación del tiempo de Dragon Ball cuánto tiempo son en la Tierra?',
            respuestas: ['1 minuto','30 segundos','2 minutos', '3 minutos'],
            respuestaCorrecta: '2 minutos',
        },
        {
            pregunta: 'Los Kinjutsu en Naruto son técnicas..',
            respuestas: ['Ilusorias','Prohibidas','Sellado','Médicas'],
            respuestaCorrecta: 'Prohibidas',
        },
        {
            pregunta: '¿Cuántos dedos de Sukuna en Jujutsu Kaisen existen?',
            respuestas: ['20 dedos','10 dedos','5 dedos','16 dedos'],
            respuestaCorrecta: '20 dedos',
        }
    ];

    // Función para mostrar las preguntas
    function showQuestions() {
        let quizContainer = document.getElementById('quizContainer');
        quizContainer.innerHTML = ''; //limpiar contenedor antes de agregar la siguiente pregunta

        let pregunta = preguntas[preguntaActual];

        //Crear pregunta
        let textoPregunta = document.createElement('div');
        textoPregunta.innerHTML = pregunta.pregunta; //dentro del obj

        //Container de respuestas
        let containerRespuestas = document.createElement('div');

        //crear botones de respuesta
        pregunta.respuestas.forEach((respuesta, index) => {
            let btnRespuesta = document.createElement('button');
            btnRespuesta.classList.add('respuesta');
            btnRespuesta.innerHTML = respuesta; //lo que devuelve el foreach
            btnRespuesta.setAttribute('data-index', index); //se guarda la respuesta para no aparecer en inspeccionar
            btnRespuesta.onclick = () => checkAnswer(btnRespuesta, respuesta);
            containerRespuestas.appendChild(btnRespuesta);
        });

        /* //crear boton de contestar
        let contestar = document.createElement('button');
        contestar.innerText = 'Contestar';
        contestar.addEventListener('click', () => {
            //cuando se clica contestar se verifica la resp
            let selectedButton = containerRespuestas.querySelector('.respuesta.selected');
            if (selectedButton) {
                checkAnswer(selectedButton, selectedButton.innerHTML === pregunta.respuestaCorrecta);
            } else {
                alert('Por favor, selecciona una respuesta.');
            }
        }) */

        //añadir todo al DOM
        quizContainer.appendChild(textoPregunta);
        quizContainer.appendChild(containerRespuestas);
        /* quizContainer.appendChild(contestar); */
    }

    //funcion para corregir la respuesta
    function checkAnswer(button, selectedAnswer) {
        let pregunta = preguntas[preguntaActual];
        let feedback = document.createElement('div');
        feedback.classList.add('feedback');
        
        // Compara la respuesta seleccionada con la respuesta correcta
        if (selectedAnswer === pregunta.respuestaCorrecta) {
            feedback.innerHTML = 'Respuesta Correcta!';
            feedback.style.color = 'green';
            score++; //sume cuando acierta
        } else {
            feedback.innerHTML = 'Respuesta Incorrecta..';
            feedback.style.color = 'red';
        }

        // Mostrar feedback
        button.parentElement.appendChild(feedback);

        // Deshabilitar botones de respuesta después de contestar
        let buttons = button.parentElement.querySelectorAll('button');
        buttons.forEach(btn => btn.disabled = true);

        // Esperar 2 segundos y pasar a la siguiente pregunta
        setTimeout(() => {
            preguntaActual++;
            if (preguntaActual < preguntas.length) {
                showQuestions();
            } else {
                // Guardar el score en localStorage
                localStorage.setItem('score', score);
                window.location.href = 'resultado.html'; //redirigir a resultados
            }
        }, 2000);
    }

    //RESULTADO.HTML
    /* function mostrarMensaje(){
        let divResultado = document.getElementById('resultado');
        let mensajeResultado = document.getElementById('mensajeResultado');

        //limpiar clases anteriores
        divResultado.innerHTML = '';

        //mensaje
        if(score <= 4){
            mensajeResultado.innerHTML = 'DEBERÍAS <b>NO</b> DORMIRTE VIENDO ANIME';
            divResultado.classList.add('resultado0-4');
        }else if(score <= 6){
            mensajeResultado.innerHTML = 'DEBERÍAS DEJAR EL ANIME EN ESPAÑOL Y VERLO EN <b>JAPO</b>';
            divResultado.classList.add('resultado6');
        }else if(score <= 9){
            mensajeResultado.innerHTML = 'VEO QUE ASPIRAS A SER <b>HOKAGE</b>';
            resultadoDiv.classList.add('resultado7-9');
        }else if(score == 10){
            mensaje.innerHTML = '<b>海賊王 (kaizoku-o)</b>';
            resultadoDiv.classList.add('resultado10');
        }

    } */

    

    // Mostrar la primera pregunta
    showQuestions();
});
