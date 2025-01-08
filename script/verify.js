 //variables index
 let nombreUsuario = document.getElementById('nombreUsuario');
 let btnInicioQuiz = document.getElementById('btnInicioQuiz');
 //Verificacion del nombre de usuario
 btnInicioQuiz.addEventListener('click', (event) => {
     if (nombreUsuario.value.trim() === '') {
         event.preventDefault();
         alert('¿Cómo te llamas?');
     }
 });