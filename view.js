const imgScene = document.getElementById('scenario-img');
const character = document.getElementById('personaje');
const terminal = document.getElementById('terminal');
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
let iNombre = document.getElementById('nombre');

btn1.addEventListener('click', async () => {
    if (btn1.innerHTML === "Explorar") {
        enemigo = mostrarEnemigo();
    } else if (btn1.innerHTML === "Luchar") {
        let resultado = await combate(personaje, enemigo);
        if (resultado === "Has ganado") {
            personaje.experiencia += enemigo.experiencia;
            terminal.innerText += `Has ganado ${enemigo.experiencia} puntos de experiencia.\n`;
            btn1.innerHTML = "Explorar";
            btn2.innerHTML = "Seguir con mi viaje";
            character.innerHTML = ActualizarEstadisticas() + ActualizarEquipamiento();
        } else {
            personaje.puntosDeVida = 0;
            terminal.innerText += "Has perdido.\n";
            btn1.innerHTML = "";
            btn2.innerHTML = "";
            character.innerHTML = ActualizarEstadisticas() + ActualizarEquipamiento();
        }

    }
});

btn2.addEventListener('click', () => {
    if (btn2.innerHTML === "Seguir con mi viaje") {
        mostrarEscenario();
    } else {
        fueraCombate(escenario);
    }
});

escenario = mostrarEscenario();
personaje = devolverPersonaje(false);
let enemigo;
character.innerHTML = ActualizarEstadisticas() + ActualizarEquipamiento();
let combatPromiseResolve;

/**
 * Genera un escenario aleatorio y lo devuelve
 * @returns {Escenario} Escenario generado
 */
function mostrarEscenario() {
    let escenario = generarEscenario();
    fueraCombate(escenario);
    return escenario;
}

/**
 * Esta funcion espera a que el jugador pulse el botón de luchar para continuar con el combate
 * @returns {Promise} Resuelve cuando el jugador pulsa el botón de luchar
 */
function waitForFightButton() {
    return new Promise((resolve) => {
        combatPromiseResolve = resolve;
    });
}

/**
 * Esta funcion genera la iniciativa de los combatientes y devuelve el que ataca primero, luego comienza el combate entre el personaje y el enemigo
 * @param {*} personajeCombatiente personaje que va a combatir
 * @param {*} enemigoCombate enemigo que va a combatir
 * @returns el resultado del combate
 */
async function combate(personajeCombatiente, enemigoCombate) {
    let iniciativa = generarIniciativa(personajeCombatiente, enemigoCombate);
    personajeCombatiente.name = iNombre.value;
    let atacante = iniciativa;
    let defensor = personajeCombatiente;
    if (iniciativa === personajeCombatiente) {
        atacante = personajeCombatiente;
        defensor = enemigoCombate;
    }
    while (personajeCombatiente.puntosDeVida > 0 && enemigoCombate.puntosDeVida > 0) {
        let claseArmadura = defensor.claseDeArmadura;
        console.log(claseArmadura);
        let tirada = Math.floor(Math.random() * 20) + encontrarModificador(atacante.destreza);
        console.log(tirada);
        if (tirada >= claseArmadura) {
            let armaAtaque = armaAtacante(atacante);
            let daño = dañoAtacante(armaAtaque);
            defensor.puntosDeVida -= daño;
            terminal.innerText = `${atacante.name} ataca a ${defensor.name} y causa ${daño} puntos de daño.\n`;
            if (defensor.puntosDeVida <= 0) {
                defensor.puntosDeVida = 0;
                break;
            }
        } else {
            terminal.innerText = `${atacante.name} falla su ataque contra ${defensor.name}.\n`;
        }
        await waitForFightButton();

        let temp = atacante;
        atacante = defensor;
        defensor = temp;
    }
    if (personajeCombatiente.puntosDeVida <= 0) {
        terminal.innerText += "Has perdido.\n";
        return "Has perdido";
    } else {
        terminal.innerText += "Has ganado.\n";
        return "Has ganado";
    }
}

/**
 * dado un escenario, muestra la descripción y la imagen del escenario
 * @param {*} scene Escenario a mostrar
 */
function fueraCombate (scene){
    if (scene.name === "ciudad") {
        btn1.innerHTML = "Descansar";
        btn2.innerHTML = "Ir a la tienda";
    }
    else if (scene.name === "campamento") {
        btn1.innerHTML = "Descansar";
        btn2.innerHTML = "Seguir con mi viaje";
    }
    else {
        btn1.innerHTML = "Explorar";
        btn2.innerHTML = "Seguir con mi viaje";
        terminal.innerHTML = scene.descripcion;
        imgScene.src = scene.img;
    }
}

/**
 * Esta funcion genera un enemigo y lo muestra en la escena
 * @returns {Enemigo} Enemigo generado
 */
function mostrarEnemigo() {
    let enemigo = generarEnemigo(escenario);
    btn1.innerHTML = "Luchar";
    btn2.innerHTML = "Huir";
    terminal.innerHTML = enemigo.descripcion;
    imgScene.src = enemigo.img;
    return enemigo;
}

/**
 * Esta funcion actualiza las estadisticas del personaje
 * @returns {string} HTML con las estadisticas del personaje
 */
function ActualizarEstadisticas() {
    personaje = devolverPersonaje(true);
    let html = 
    `        
    <div class="stats-container">
            <ul class="stats">
                <li>Nombre: <input type="text" class="char-input nombre" id="nombre"></li>
                <li>Raza: ${personaje.raza}</li>
                <li>Clase: ${personaje.clase}</li>
                <li>Edad: <input type="text" class="char-input edad"></li>
                <li>Experiencia: ${personaje.experiencia}</li>
                <li>Puntos de golpe ${personaje.puntosDeVida}</li>
                <li>Clase de armadura ${personaje.claseDeArmadura}</li>
                <li>Iniciativa ${personaje.iniciativa}</li>
                <li>Estadisticas
                    <ul>
                        <li>Fuerza ${personaje.fuerza} mod: ${encontrarModificador(personaje.fuerza)}</li>
                        <li>Destreza ${personaje.destreza} mod: ${encontrarModificador(personaje.destreza)}</li>
                        <li>Constitución ${personaje.constitución} mod: ${encontrarModificador(personaje.constitución)}</li>
                        <li>Inteligencia ${personaje.inteligencia} mod: ${encontrarModificador(personaje.inteligencia)}</li>
                        <li>Sabiduría ${personaje.sabiduria} mod: ${encontrarModificador(personaje.sabiduria)}</li>
                        <li>Carisma ${personaje.carisma} mod: ${encontrarModificador(personaje.carisma)}</li>
                    </ul>
                </li>
            </ul>
    </div>
     `;
    iNombre = document.getElementById('nombre');
    return html;
}

/**
 * Esta funcion actualiza el equipamiento del personaje
 * @returns {string} HTML con el equipamiento del personaje
 */
function ActualizarEquipamiento() {
    let html = 
    `
    <div class="equipment-container">
        <ul class="equipment">
    `;
    for (let i = 0; i < personaje.equipamiento.length; i++) {
        html += `<li>${personaje.equipamiento[i].name}</li>`;
    }
    html += `</ul></div>`;
    return html;
}