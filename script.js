//LLamamos a los elementos del DOM que necesitamos para el slider de imágenes(La imagen principal y las miniaturas)
const principal = document.getElementById("principal");
//Pillamos todas las miniaturas y las guardamos en un array con el selectorall
const minis = document.querySelectorAll(".mini"); 

//Recorremos el array y con un evento click cambiamos la imagen principal por la miniatura
// correspondiente, usando el dataset para obtener la ruta de la imagen completa
minis.forEach(function(mini) {
    mini.addEventListener('click',function() {
        principal.style.opacity = 0;
        //Funcion de tiempo para que el cambio de imagen sea fluido.
        setTimeout(function() {
            //Src de la imagen principal sera la ruta de la imagen completa que tenemos en el dataset de la miniatura
            principal.src = mini.dataset.full;
            //alt de la imagen principal sera el alt de la miniatura
            principal.alt=mini.alt;
            principal.style.opacity = 1;
        }, 300);
    });
});


//Creamos las variables y les asignamos los objetos del DOM correspondientes
const btnReel = document.getElementById("btnReel");
const btnCerrarReel = document.getElementById("btnCerrarReel");
const elementoModal = document.getElementById("modalReel");
const video = document.getElementById("video");
//El modalreel sera un nuevo bootstrap.Modal, al que le pasamos como parametro el elemento modalReel
const modalReel = new bootstrap.Modal(elementoModal);

//Este evento se ejecuta cuando se hace click en el boton btnreel, y muestra el modal
btnReel.addEventListener("click", function () {
    modalReel.show();
});
//Este evento se ejecuta cuando se hace click en el boton btnCerrarReel, y oculta el modal
btnCerrarReel.addEventListener("click", function () {
    modalReel.hide();
});
//Estos eventos se ejecutan cuando el modal se muestra o se oculta, respectivamente, y reproducen o pausan el video
elementoModal.addEventListener("shown.bs.modal", function () {
    video.play();
});
//Este evento se ejecuta cuando el modal se oculta, y pausa el video y lo reinicia a 0
elementoModal.addEventListener("hidden.bs.modal", function () {
    video.pause();
    video.currentTime = 0;
});


// Llamamos al elemento audio y a los dos botones propios
const audioAmbiente = document.getElementById("audioAmbiente");
const btnAmbiente = document.getElementById("btnAmbiente");
const btnSilencio = document.getElementById("btnSilencio");

// Bajamos el volumen al la mitad para no asustar al visitante
audioAmbiente.volume = 0.5;

// Boton principal: alterna entre reproducir y pausar segun la propiedad paused
btnAmbiente.addEventListener("click", function () {
    if (audioAmbiente.paused) {
        audioAmbiente.play();
        btnAmbiente.textContent = "Pausar ambiente espacial";
        btnAmbiente.setAttribute("aria-pressed", "true");
    } else {
        audioAmbiente.pause();
        btnAmbiente.textContent = "Escuchar ambiente espacial";
        btnAmbiente.setAttribute("aria-pressed", "false");
    }
});

// Segundo boton: silencia sin parar la reproduccion, con la propiedad muted
btnSilencio.addEventListener("click", function () {
    audioAmbiente.muted = !audioAmbiente.muted;

    if (audioAmbiente.muted) {
        btnSilencio.textContent = "Activar sonido";
        btnSilencio.setAttribute("aria-pressed", "true");
    } else {
        btnSilencio.textContent = "Silenciar";
        btnSilencio.setAttribute("aria-pressed", "false");
    }
});

// Al abrir el reel pausamos el ambiente para que los dos audios no se solapen
elementoModal.addEventListener("show.bs.modal", function () {
    if (!audioAmbiente.paused) {
        audioAmbiente.pause();
        btnAmbiente.textContent = "Escuchar ambiente espacial";
        btnAmbiente.setAttribute("aria-pressed", "false");
    }
});
