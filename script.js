// ==========================================
// CUENTA REGRESIVA - CUMPLEAÑOS DE KARELYS
// 24 de octubre de 2026
// ==========================================

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

// Medianoche del 24 de octubre
const cumpleKarelys = new Date("2026-10-24T00:00:00");

function actualizarContador() {

    const ahora = new Date();
    const diferencia = cumpleKarelys - ahora;

    // Si ya llegó el cumpleaños
    if (diferencia <= 0) {

        dias.textContent = "00";
        horas.textContent = "00";
        minutos.textContent = "00";
        segundos.textContent = "00";

        return;
    }

    const diasRestantes = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horasRestantes = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );

    const minutosRestantes = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );

    const segundosRestantes = Math.floor(
        (diferencia / 1000) % 60
    );

    dias.textContent = String(diasRestantes).padStart(2, "0");
    horas.textContent = String(horasRestantes).padStart(2, "0");
    minutos.textContent = String(minutosRestantes).padStart(2, "0");
    segundos.textContent = String(segundosRestantes).padStart(2, "0");
}

// Ejecutar inmediatamente
actualizarContador();

// Actualizar cada segundo
setInterval(actualizarContador, 1000);
// ==========================================
// ENTRAR A LA SORPRESA
// ==========================================

const botonEntrar = document.getElementById("botonEntrar");

const portada = document.querySelector(".portada");

const bienvenida = document.getElementById("bienvenida");

botonEntrar.addEventListener("click", () => {

    // Animación para despedir la portada
    portada.classList.add("ocultar-portada");

    // Esperamos a que termine la animación
    setTimeout(() => {

        portada.style.display = "none";

        bienvenida.classList.add("mostrar-bienvenida");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 750);

});
// ==========================================
// BIENVENIDA → CAPÍTULO 01
// ==========================================

const comenzarHistoria =
    document.getElementById("comenzarHistoria");

const capituloFreeFire =
    document.getElementById("capituloFreeFire");

comenzarHistoria.addEventListener("click", () => {

    bienvenida.classList.add("ocultar-seccion");

    setTimeout(() => {

        bienvenida.style.display = "none";

        capituloFreeFire.classList.add("mostrar-capitulo");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 650);

});
// ==========================================
// FREE FIRE → PRIMER WHATSAPP
// ==========================================

const continuarFreeFire =
    document.getElementById("continuarFreeFire");

const capituloWhatsApp =
    document.getElementById("capituloWhatsApp");

continuarFreeFire.addEventListener("click", () => {

    capituloFreeFire.classList.add("ocultar-seccion");

    setTimeout(() => {

        capituloFreeFire.style.display = "none";

        capituloWhatsApp.classList.add("mostrar-whatsapp");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 650);

});
// ==========================================
// WHATSAPP → CAPIBARA
// ==========================================

const continuarWhatsApp =
    document.getElementById("continuarWhatsApp");

const capituloCapibara =
    document.getElementById("capituloCapibara");

continuarWhatsApp.addEventListener("click", () => {

    capituloWhatsApp.classList.add("ocultar-seccion");

    setTimeout(() => {

        capituloWhatsApp.style.display = "none";

        capituloCapibara.classList.add("mostrar-capibara");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 650);

});


// ==========================================
// ENVIAR CAPIBARA 😂
// ==========================================

const enviarCapibara =
    document.getElementById("enviarCapibara");

const regaloCapibara =
    document.getElementById("regaloCapibara");

const investigacion =
    document.getElementById("investigacion");

const progresoCapibara =
    document.getElementById("progresoCapibara");

const porcentajeCapibara =
    document.getElementById("porcentajeCapibara");

const resultadoInvestigacion =
    document.getElementById("resultadoInvestigacion");


enviarCapibara.addEventListener("click", () => {

    // Evitar enviarlo dos veces
    enviarCapibara.disabled = true;

    enviarCapibara.textContent = "🦫 Capibara enviado 😂";

    regaloCapibara.style.transform = "scale(1.08)";

    setTimeout(() => {
        regaloCapibara.style.transform = "scale(1)";
    }, 300);

    investigacion.classList.add("activa");


    let progreso = 0;

    const carga = setInterval(() => {

        progreso++;

        progresoCapibara.style.width =
            progreso + "%";

        porcentajeCapibara.textContent =
            progreso + "%";


        if (progreso >= 100) {

            clearInterval(carga);

            setTimeout(() => {

                resultadoInvestigacion
                    .classList
                    .add("visible");

                resultadoInvestigacion
                    .scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

            }, 500);

        }

    }, 25);

});
// ==========================================
// CAPIBARA → TEMU
// ==========================================

const continuarCapibara =
    document.getElementById("continuarCapibara");

const capituloTemu =
    document.getElementById("capituloTemu");


continuarCapibara.addEventListener("click", () => {

    capituloCapibara.classList.add("ocultar-seccion");

    setTimeout(() => {

        capituloCapibara.style.display = "none";

        capituloTemu.classList.add("mostrar-temu");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 650);

});


// ==========================================
// LA ESTAFA ETERNA DE TEMU 😂
// ==========================================

const crearCuentaTemu =
    document.getElementById("crearCuentaTemu");

const porcentajeTemu =
    document.getElementById("porcentajeTemu");

const progresoTemu =
    document.getElementById("progresoTemu");

const mensajeTemu =
    document.getElementById("mensajeTemu");

const contadorCuentas =
    document.getElementById("contadorCuentas");

const balanceTemu =
    document.getElementById("balanceTemu");

const temuApp =
    document.querySelector(".temu-app");


let cuentasTemu = 0;

const porcentajesTemu = [
    "99.91%",
    "99.95%",
    "99.98%",
    "99.99%"
];


crearCuentaTemu.addEventListener("click", () => {

    cuentasTemu++;

    contadorCuentas.textContent = cuentasTemu;


    // Sacudir la aplicación
    temuApp.classList.remove("temu-error");

    void temuApp.offsetWidth;

    temuApp.classList.add("temu-error");


    // Cambiar porcentaje
    const indice =
        Math.min(
            cuentasTemu - 1,
            porcentajesTemu.length - 1
        );

    porcentajeTemu.textContent =
        porcentajesTemu[indice];


    // La barra se acerca...
    // pero JAMÁS llega 😂
    progresoTemu.style.width =
        (99.9 + cuentasTemu * 0.02) + "%";


    if (cuentasTemu === 1) {

        mensajeTemu.innerHTML =
            "🎉 ¡INCREÍBLE! Ahora solo te falta " +
            "<strong>UNA persona más.</strong>";

        crearCuentaTemu.textContent =
            "💀 Crear OTRA cuenta";

    }

    else if (cuentasTemu === 2) {

        mensajeTemu.innerHTML =
            "🔥 ¡CASI! Estás demasiado cerca. " +
            "<strong>Solo UNA más.</strong>";

        crearCuentaTemu.textContent =
            "😭 Karelys insiste: otra más";

    }

    else if (cuentasTemu === 3) {

        mensajeTemu.innerHTML =
            "🎁 ¡NO TE RINDAS! " +
            "<strong>Te falta solamente una persona.</strong>";

        crearCuentaTemu.textContent =
            "🤡 Una última cuenta";

    }

    else if (cuentasTemu >= 4) {

        porcentajeTemu.textContent = "99.99%";

        progresoTemu.style.width = "99.99%";

        mensajeTemu.innerHTML =
            "🎉 ¡FELICIDADES! " +
            "<strong>Ahora solo te falta UNA persona más.</strong>";

        crearCuentaTemu.disabled = true;

        crearCuentaTemu.textContent =
            "💀 Se acabaron los correos de Marcos";

        setTimeout(() => {

            balanceTemu.classList.add("visible");

            balanceTemu.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 800);

    }

});
// ==========================================
// TEMU → TALENTOS CUESTIONABLES
// ==========================================

const continuarTemu =
    document.getElementById("continuarTemu");

const capituloImitaciones =
    document.getElementById("capituloImitaciones");


continuarTemu.addEventListener("click", () => {

    capituloTemu.classList.add("ocultar-seccion");

    setTimeout(() => {

        capituloTemu.style.display = "none";

        capituloImitaciones
            .classList
            .add("mostrar-imitaciones");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 650);

});
// ==========================================
// IMITACIONES → FUERA DE BROMAS
// ==========================================

const continuarImitaciones =
    document.getElementById("continuarImitaciones");

const capituloAdmiro =
    document.getElementById("capituloAdmiro");


continuarImitaciones.addEventListener("click", () => {

    capituloImitaciones
        .classList
        .add("ocultar-seccion");

    setTimeout(() => {

        capituloImitaciones.style.display = "none";

        capituloAdmiro
            .classList
            .add("mostrar-admiro");

        window.scrollTo({
            top: 0,
            behavior: "auto"
        });

    }, 650);

});
// ==========================================
// ADMIRACIÓN → MENTE DE POLLO
// ==========================================

const continuarAdmiro =
    document.getElementById("continuarAdmiro");

const capituloPollo =
    document.getElementById("capituloPollo");


continuarAdmiro.addEventListener("click", () => {

    capituloAdmiro.classList.add("ocultar-seccion");

    setTimeout(() => {

        capituloAdmiro.style.display = "none";

        capituloPollo.classList.add("mostrar-pollo");

        window.scrollTo({
            top: 0,
            behavior: "auto"
        });

    }, 650);

});
// ==========================================
// ANÁLISIS DE LOS 3 MB DE RAM 😂
// ==========================================

const playAudioPollo =
    document.getElementById("playAudioPollo");

const textoAudioPollo =
    document.getElementById("textoAudioPollo");

const tiempoAudio =
    document.getElementById("tiempoAudio");

const ondaAudio =
    document.querySelector(".onda-audio");

const scannerPollo =
    document.getElementById("scannerPollo");

const progresoScanner =
    document.getElementById("progresoScanner");

const scannerPorcentaje =
    document.getElementById("scannerPorcentaje");

const diagnosticoPollo =
    document.getElementById("diagnosticoPollo");


let audioAnalizado = false;


playAudioPollo.addEventListener("click", () => {

    if (audioAnalizado) return;

    audioAnalizado = true;

    playAudioPollo.textContent = "⏸";

    ondaAudio.classList.add("audio-reproduciendo");


    // Karelys empieza perfectamente 😂

    setTimeout(() => {

        tiempoAudio.textContent = "0:02";

        textoAudioPollo.textContent =
            "“Marcos, te iba a contar que hoy estaba...”";

    }, 500);


    // Empieza a fallar la RAM

    setTimeout(() => {

        tiempoAudio.textContent = "0:05";

        textoAudioPollo.textContent =
            "“...espera...”";

    }, 1800);


    setTimeout(() => {

        tiempoAudio.textContent = "0:07";

        textoAudioPollo.textContent =
            "“¿Qué te iba a decir?”";

    }, 3000);


    // Colapso total 😂

    setTimeout(() => {

        tiempoAudio.textContent = "0:09";

        textoAudioPollo.innerHTML =
            "“Ay, se me olvidó JAJAJA.” 🐔";

        playAudioPollo.textContent = "▶";

        ondaAudio.classList.remove(
            "audio-reproduciendo"
        );


        scannerPollo.classList.add("visible");

        iniciarScannerPollo();

    }, 4300);

});


function iniciarScannerPollo() {

    let progreso = 0;

    const analizar = setInterval(() => {

        progreso++;

        progresoScanner.style.width =
            progreso + "%";

        scannerPorcentaje.textContent =
            progreso + "%";


        if (progreso >= 100) {

            clearInterval(analizar);

            setTimeout(() => {

                diagnosticoPollo
                    .classList
                    .add("visible");

                diagnosticoPollo
                    .scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

            }, 400);

        }

    }, 20);

}
// ==========================================
// MENTE DE POLLO → EL HEREDERO
// ==========================================

const continuarPollo =
    document.getElementById("continuarPollo");

const capituloPerrito =
    document.getElementById("capituloPerrito");


continuarPollo.addEventListener("click", () => {

    capituloPollo.classList.add("ocultar-seccion");

    setTimeout(() => {

        capituloPollo.style.display = "none";

        capituloPerrito
            .classList
            .add("mostrar-perrito");

        window.scrollTo({
            top: 0,
            behavior: "auto"
        });

    }, 650);

});
// ==========================================
// INVESTIGACIÓN: MADRE DEL AÑO 😂
// ==========================================

const verReaccionKarelys =
    document.getElementById("verReaccionKarelys");

const reaccionKarelys =
    document.getElementById("reaccionKarelys");

const veredictoPerrito =
    document.getElementById("veredictoPerrito");


verReaccionKarelys.addEventListener("click", () => {

    verReaccionKarelys.disabled = true;

    verReaccionKarelys.textContent =
        "Analizando reacción... 🧐";


    setTimeout(() => {

        reaccionKarelys
            .classList
            .add("visible");

        verReaccionKarelys.textContent =
            "Caso confirmado 😂";


        setTimeout(() => {

            veredictoPerrito
                .classList
                .add("visible");

            veredictoPerrito
                .scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

        }, 1200);

    }, 700);

});
// ==========================================
// EL HEREDERO → SOLO ES KARELYS
// ==========================================

const continuarPerrito =
    document.getElementById("continuarPerrito");

const capituloKarelys =
    document.getElementById("capituloKarelys");


continuarPerrito.addEventListener("click", () => {

    capituloPerrito.classList.add("ocultar-seccion");

    setTimeout(() => {

        capituloPerrito.style.display = "none";

        capituloKarelys
            .classList
            .add("mostrar-karelys");

        window.scrollTo({
            top: 0,
            behavior: "auto"
        });

    }, 650);

});
// ==========================================
// SOLO ES KARELYS → CARTA FINAL
// ==========================================

const abrirCarta =
    document.getElementById("abrirCarta");

const capituloCarta =
    document.getElementById("capituloCarta");


abrirCarta.addEventListener("click", () => {

    capituloKarelys
        .classList
        .add("ocultar-seccion");

    setTimeout(() => {

        capituloKarelys.style.display = "none";

        capituloCarta
            .classList
            .add("mostrar-carta");

        window.scrollTo({
            top: 0,
            behavior: "auto"
        });

    }, 650);

});
// ==========================================
// ABRIR SOBRE 💌
// ==========================================

const abrirSobre =
    document.getElementById("abrirSobre");

const sobre =
    document.getElementById("sobre");

const finalCumple =
    document.getElementById("finalCumple");

const confetiContenedor =
    document.getElementById("confetiContenedor");

const musicaFinal =
    document.getElementById("musicaFinal");


let cartaAbierta = false;
let musicaFinalIniciada = false;
let animacionFadeMusicaFinal = null;

const volumenMusicaFinal = 0.45;
const duracionFadeMusicaFinal = 3;


function aplicarFadeMusicaFinal() {

    const tiempoRestante =
        musicaFinal.duration - musicaFinal.currentTime;

    const progresoFade = Math.max(
        0,
        Math.min(
            1,
            tiempoRestante / duracionFadeMusicaFinal
        )
    );

    musicaFinal.volume =
        volumenMusicaFinal * progresoFade;

    if (!musicaFinal.ended && tiempoRestante > 0) {

        animacionFadeMusicaFinal =
            requestAnimationFrame(aplicarFadeMusicaFinal);

    } else {

        animacionFadeMusicaFinal = null;

    }

}


function iniciarMusicaFinal() {

    if (musicaFinalIniciada) return;

    musicaFinalIniciada = true;
    musicaFinal.volume = volumenMusicaFinal;
    musicaFinal.loop = false;

    musicaFinal.play().catch((error) => {

        console.error(
            "No se pudo reproducir la música final:",
            error
        );

    });

}


musicaFinal.addEventListener("timeupdate", () => {

    const tiempoRestante =
        musicaFinal.duration - musicaFinal.currentTime;

    if (
        tiempoRestante <= duracionFadeMusicaFinal &&
        animacionFadeMusicaFinal === null
    ) {

        aplicarFadeMusicaFinal();

    }

});


abrirSobre.addEventListener("click", () => {

    if (cartaAbierta) return;

    cartaAbierta = true;

    abrirSobre.classList.add("oculto");

    sobre.classList.add("abierto");


    // Música y primer confeti al abrir
    iniciarMusicaFinal();

    crearConfeti(60);


    // Mostrar final después de abrir la carta
    setTimeout(() => {

        finalCumple
            .classList
            .add("visible");

    }, 1800);

});
// ==========================================
// CONFETI 🎉
// ==========================================

function crearConfeti(cantidad) {

    const formas = [
        "■",
        "●",
        "♥",
        "✦"
    ];

    for (let i = 0; i < cantidad; i++) {

        const confeti =
            document.createElement("span");

        confeti.classList.add("confeti");

        confeti.textContent =
            formas[
            Math.floor(
                Math.random() * formas.length
            )
            ];

        confeti.style.left =
            Math.random() * 100 + "vw";

        confeti.style.fontSize =
            (8 + Math.random() * 12) + "px";

        confeti.style.color =
            [
                "#ff5ca8",
                "#ff91c2",
                "#a86cff",
                "#ffd76a",
                "#ffffff"
            ][
            Math.floor(Math.random() * 5)
            ];

        confeti.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        confeti.style.animationDelay =
            (Math.random() * .8) + "s";


        confetiContenedor
            .appendChild(confeti);


        setTimeout(() => {

            confeti.remove();

        }, 7000);

    }

}
