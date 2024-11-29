const enemigos = [
    {name:"Goblin", descripcion:"Vaya, parece que te has encontrado a uno de estos peculiares* seres, no te confies demasiado.", img:"./img/goblin.jpg", fuerza: 8, destreza: 14, constitución: 10, inteligencia: 10, sabiduria: 8, carisma: 8, puntosDeVida: 7, claseDeArmadura: 8, equipamiento: [{name: "Daga", type: "Weapon", damage: "1d4"}, {name: "Arco corto", type: "Weapon", damage: "1d6"}]},
    {name:"Orco", descripcion:"Contra los orcos hay que andarse con cuidado, nunca sabes como van a actuar, su idiotez confunde, yo escaparia si me encuentro a varios... No sabes cuantos puede haber detras", img:"./img/orco.jpg", fuerza: 16, destreza: 12, constitución: 16, inteligencia: 7, sabiduria: 11, carisma: 10, puntosDeVida: 15, claseDeArmadura: 13, equipamiento: [{name: "Hacha", type: "Weapon", damage: "1d8"}, {name: "Armadura de cuero", type: "Armor"}]},
    {name:"Ogro", descripcion:"Bicho grande golpea fuerte, evita que te golpee, te dejara hecho un fiasco", img:"./img/ogro.jpg", fuerza: 19, destreza: 8, constitución: 15, inteligencia: 5, sabiduria: 7, carisma: 7, puntosDeVida: 25, claseDeArmadura: 11, equipamiento: [{name: "Gran maza", type: "Weapon", damage: "2d8"}, {name: "Armadura de cuero", type: "Armor"}]},
    {name:"Esqueleto", descripcion:"Para ser un no muerto, son bastante agiles, por norma general, suelen ser buenos espadachines.", img:"./img/esqueleto.jpg", fuerza: 10, destreza: 14, constitución: 15, inteligencia: 6, sabiduria: 8, carisma: 5, puntosDeVida: 13, claseDeArmadura: 9, equipamiento: [{name: "Espada corta", type: "Weapon", damage: "1d6"}, {name: "Sin armadura", type: "Armor"}]},
    {name:"Lobo", descripcion:"Te has encontrado a un lobo, pero parece que no anda en manada, esperemos...", img:"./img/lobo.jpg", fuerza: 12, destreza: 15, constitución: 12, inteligencia: 3, sabiduria: 12, carisma: 6, puntosDeVida: 11, claseDeArmadura: 11, equipamiento: [{name: "Mordisco", type: "Weapon", damage: "1d6"}, {name: "Garras", type: "Weapon", damage: "2d4"}, {name: "Sin armadura", type: "Armor"}]},
    {name:"Jabali", descripcion:"Parece cualquier cosa, pero los jabalies son enemigos formidables, una embestida y puedes visitar al de arriba", img:"./img/jabali.jpg", fuerza: 14, destreza: 10, constitución: 14, inteligencia: 2, sabiduria: 9, carisma: 5, puntosDeVida: 13, claseDeArmadura: 10, equipamiento: [{name: "Embiste", type: "Weapon", damage: "1d6"}, {name: "Sin armadura", type: "Armor"}]},
    {name:"Arbol ent", descripcion: "Te has encontrado un arbol ent, son bastante lentos, pero robustos y fuertes, no te vayan a golpear", img:"./img/arbolEnt.jpg", fuerza: 18, destreza: 6, constitución: 17, inteligencia: 10, sabiduria: 14, carisma: 12, puntosDeVida: 30, claseDeArmadura: 9, equipamiento: [{name: "Golpe", type: "Weapon", damage: "2d6"}, {name: "Sin armadura", type: "Armor"}]},
    {name:"Wivern", descripcion: "Te has topado con un enemigo formidable, un Wivern, no te dejes engañar por su parecido a un dragon, estos seres son mas agiles pero menos resistentes", img:"./img/wivern.jpg", fuerza: 19, destreza: 10, constitución: 16, inteligencia: 5, sabiduria: 12, carisma: 6, puntosDeVida: 55, claseDeArmadura: 11, equipamiento: [{name: "Mordisco", type: "Weapon", damage: "2d6"}, {name: "Garras", type: "Weapon", damage: "2d8"}, {name: "Sin armadura", type: "Armor"}]},
    {name:"Trol", descripcion: "Un trol... Bicho enorme destruye lugar, estamos hablando ya de una gran bestia", img:"./img/troll.jpg", fuerza: 18, destreza: 13, constitución: 17, inteligencia: 7, sabiduria: 9, carisma: 7, puntosDeVida: 30, claseDeArmadura: 13, equipamiento: [{name: "Tronco", type: "Weapon", damage: "1d8"}, {name: "Pistoton", type: "Weapon", damage: "2d6"}, {name: "Sin armadura", type: "Armor"}]},
    {name:"Hombre lobo", descripcion: "El hombre lobo, un enemigo agil, fuerte, resistente... un claro reto para cualquier aventurero", img:"./img/hombreLobo.jpg", fuerza: 15, destreza: 13, constitución: 14, inteligencia: 10, sabiduria: 11, carisma: 10, puntosDeVida: 17, claseDeArmadura: 12, equipamiento: [{name: "Mordisco", type: "Weapon", damage: "1d8"}, {name: "Garras", type: "Weapon", damage: "2d4"}, {name: "Sin armadura", type: "Armor"}]},
    {name:"Vampiro", descripcion:"Te has topado a un vampiro en el camino, no dejes que te muerda, se volvera mas fuerte.", img:"./img/vampiro.jpg", fuerza: 18, destreza: 16, constitución: 16, inteligencia: 14, sabiduria: 12, carisma: 18, puntosDeVida: 30, claseDeArmadura: 13, equipamiento: [{name: "Mordisco", type: "Weapon", damage: "1d8", healing: "1d4"}, {name: "Condensar sangre", type: "Weapon", damage: "2d6"}, {name: "Sin armadura", type: "Armor"}]},
    {name:"Demonio", descripcion:"Un ser salido del mismisimo infierno, yo no me enfrentaria a nada parecido...", img:"./img/demonio.jpg", fuerza: 20, destreza: 15, constitución: 18, inteligencia: 15, sabiduria: 14, carisma: 20, puntosDeVida: 40, claseDeArmadura: 15, equipamiento: [{name: "Mordisco", type: "Weapon", damage: "1d8"}, {name: "Garras", type: "Weapon", damage: "2d6"}, {name: "Sin armadura", type: "Armor"}]},
    {name:"Dragon", descripcion: "Parece que has encontrado al dragon que dormia en la caverna, puede ser el final de una buena historia...", img:"./img/dragon.jpg", fuerza: 24, destreza: 14, constitución: 20, inteligencia: 16, sabiduria: 16, carisma: 18, puntosDeVida: 60, claseDeArmadura: 18, equipamiento: [{name: "Mordisco", type: "Weapon", damage: "2d4"}, {name: "Llamarada", type: "Weapon", damage: "2d10"}, {name: "Alas", type: "Weapon", damage: "2d6"}, {name: "Sin armadura", type: "Armor"}]},
    {name:"Elf", descripcion:"Parece que los dueños del bosque no estan contentos con que estes por aqui", img:"./img/elf.jpg", fuerza: 10, destreza: 16, constitución: 12, inteligencia: 14, sabiduria: 14, carisma: 12, puntosDeVida: 10, claseDeArmadura: 12, equipamiento: [{name: "Espada larga", type: "Weapon", damage: "1d8"}, {name: "Armadura de cuero", type: "Armor"}, {name: "Arco largo", type: "Weapon", damage: "1d8"}]},
    {name:"Lich", descripcion:"En el castillo, no hay peor rival, un lich, un ser con conocimiento ilimitado, alguien que renuncio a la mortalidad por la magia...", img:"./img/lich.jpg", fuerza: 10, destreza: 12, constitución: 14, inteligencia: 18, sabiduria: 16, carisma: 20, puntosDeVida: 20, claseDeArmadura: 13, equipamiento: [{name: "Nova de escarcha", type: "Weapon", damage: "1d10"}, {name: "Rayo de escarcha", type: "Weapon", damage: "2d6"}, {name: "Sin armadura", type: "Armor"}]},
];

const escenarios = [
    {name:"Mazmorra", descripcion:"Te has encuentrado una mazmorra, dios se apiade de tu alma y te salve de los horrores que acechan...", img:"./img/mazmorra.jpg", enemyPool: [enemigos[3], enemigos[1], enemigos[0], enemigos[2]]},
    {name:"Bosque", descripcion:"Has llegado a un frondoso bosque, nadie sabe que te puedes llegar a encontrar...", img:"./img/bosque.jpg", enemyPool: [enemigos[0], enemigos[4], enemigos[5]]},
    {name:"Bosque", descripcion:"En un hermoso bosque donde los pajaros cantan y en la luz del sol te bañas, la naturaleza te da un lugar en el que estar", img:"./img/bosque2.jpg", enemyPool: [enemigos[4], enemigos[5], enemigos[13]]},
    {name:"Bosque", descripcion:"Te encuentras en un tenebroso bosque, parece que la naturaleza te esta planteando un nuevo desafio, esperemos que el cansancio no te gane...", img:"./img/bosque3.jpg", enemyPool: [enemigos[6], enemigos[7], enemigos[8]]}, 
    {name:"Campamento", descripcion:"Parece que has llegado a un campamento, puede que de un largo viaje, porque no te paras a descansar?", img:"./img/campamento.jpg"},
    {name:"Ciudad", descripcion:"Un hogareña ciudad y su hermosa gente, que te podra llegar a ofrecer este lugar?", img:"./img/ciudad.jpg"},
    {name:"Cueva", descripcion:"Cada crujido, cada sonido, te ponen alerta... Estas en una cueva inexplorada...", img:"./img/cueva.jpg", enemyPool: [enemigos[2], enemigos[3], enemigos[4], enemigos[8], enemigos[12]]},
    {name:"Castillo", descripcion:"Que sentimiento tan familiar... Que habrá ocurrido con la gente que vivia aqui?", img:"./img/castillo.jpg", enemyPool: [enemigos[3], enemigos[9], enemigos[10], enemigos[11], enemigos[14]]},

];

const razas = ["Elfo", "Enano", "Humano", "Gnomo", "Mediano", "Semielfo", "Tiefling"]
const clases = ["Bardo", "Clerigo", "Guerrero", "Mago", "Pícaro"];

let personaje = {
        fuerza: 0, 
        destreza: 0, 
        constitución: 0, 
        inteligencia: 0, 
        sabiduria: 0, 
        carisma: 0
};

/**
 * Esta funcion genera un escenario aleatorio de la lista de escenarios
 * @returns un escenario aleatorio de la lista de escenarios
 */
function generarEscenario () {
    let escenario = escenarios[Math.floor(Math.random() * escenarios.length)];
    return escenario;

}

/**
 * Esta funcion genera enemigos segun la pool de enemigos del escenario actual
 * @param {*} actualScene la escena que se esta jugando
 * @returns un enemigo de dentro de la pool de enemigos del escenario actual
 */
function generarEnemigo (actualScene) {
    let enemigo = actualScene.enemyPool[Math.floor(Math.random() * escenario.enemyPool.length)];
    return enemigo;
}

/**
 * Esta funcion dado un personaje atacante, te devuelve el arma que usara para atacar
 * @param {*} personajeAtacante personaje que ataca
 * @returns la arma que usara el personaje atacante
 */
function armaAtacante (personajeAtacante) {
    let posiblesArmas = [];
    for (const item of personajeAtacante.equipamiento) {
        if (item.type === "Weapon") {
            posiblesArmas.push(item);
        }
    }
    return posiblesArmas[Math.floor(Math.random() * posiblesArmas.length)];
}

/**
 * Esta funcion dado un arma, te devuelve el daño que hara el atacante
 * @param {*} arma arma que se usara para atacar
 * @returns daño que hara el atacante
 */
function dañoAtacante (arma) {
    let daño = arma.damage;
    let dados = daño.split("d");
    let resultado = 0;
    for (let i = 0; i < dados[0]; i++) {
        resultado += Math.floor(Math.random() * dados[1]) + 1;
    }
    return resultado;
}

/**
 * Esta funcion dados un personaje y un enemigo, te devuelve el personaje que va a tener la iniciativa en combate
 * @param {*} personaje personaje que va a combatir
 * @param {*} enemigo enemigo que va a comnbatir
 * @returns quien tiene la iniciativa en el combate
 */
function generarIniciativa (personaje, enemigo) {
    let iniciativaPersonaje = Math.floor(Math.random() * 20) + encontrarModificador(personaje.destreza);
    personaje.iniciativa = iniciativaPersonaje;
    let iniciativaEnemigo = Math.floor(Math.random() * 20) + encontrarModificador(enemigo.destreza);
    if (iniciativaPersonaje > iniciativaEnemigo) {
        return personaje;
    }
    else {
        return enemigo;
    }
}

/**
 * Esta funcion genera un personaje aleatorio, asignandole una raza aleatoria
 * @param {*} aRazas lista de razas posibles
 * @param {*} oPersonaje persona a la que se le asignara la raza
 * 
 */
function generarPersonaje (aRazas, aClases, oPersonaje) {
    for (const estadistica in oPersonaje) {
        if (oPersonaje.hasOwnProperty(estadistica)) {
            oPersonaje[estadistica] = generarEstadistica();
        }
    }
    generarRazaClase(aRazas, aClases, oPersonaje);
    generarTemplatePersonaje(oPersonaje);
    oPersonaje.claseDeArmadura = generarClaseArmadura(oPersonaje);
    oPersonaje.experiencia = 0;
}

/**
 * 
 * @returns devuelve el personaje generado
 */
function devolverPersonaje (isCreated) {
    if (!isCreated) {
        generarPersonaje(razas, clases, personaje);
    }
    return personaje;
}

/**
 * Esta funcion genera un personaje aleatorio, asignandole una raza y una clase aleatoria
 * @param {*} aRazas  lista de razas posibles
 * @param {*} aClases  lista de clases posibles
 * @param {*} oPersonaje  personaje al que se le asignara una raza y una clase
 */
function generarRazaClase (aRazas, aClases, oPersonaje) {
    oPersonaje.raza = aRazas[Math.floor(Math.random() * aRazas.length)];
    oPersonaje.clase = aClases[Math.floor(Math.random() * aClases.length)];
    generarTemplatePersonaje(oPersonaje);
}

/**
 * se calcula la clase de armadura de un personaje objetivo usando su modificador de destreza si la armadura lo indica + la clase de armadura que le da su armadura segun su equipamiento
 * @param {*} personajeObjetivo dado personaje, se calculará su clase de armadura
 * @returns devuelve la clase de armadura del personaje objetivo
 */
function generarClaseArmadura (personajeObjetivo) {
    let claseArmadura = 0;
    for (const item of personajeObjetivo.equipamiento) {
        if (item.type === "Armor") {
            claseArmadura += item.armorClass;
            if (item.name === "Armadura de cuero") {
                claseArmadura += encontrarModificador(personajeObjetivo.destreza);
            }
        }
        if (item.type === "Shield") {
            claseArmadura += item.armorClass;
        }
    }

    return claseArmadura;
}

/**
 * dado un personaje objetivo genera su equpamiento basico y sus puntos de golpe segun su clase
 * @param {*} personajeObjetivo personaje al que se le generara el equipamiento
 */
function generarTemplatePersonaje (personajeObjetivo) {
    if (personajeObjetivo.clase === "Bardo") {
        personajeObjetivo.equipamiento = [{name: "Estoque", type: "Weapon", damage: "1d8",}, {name: "Armadura de cuero", type: "Armor", armorClass: 11}, {name: "Daga", type: "Weapon", damage: "1d4"}, {name: "Instrumento musical", type: "Instrument"}];
        personajeObjetivo.puntosDeVida = 8 + encontrarModificador(personajeObjetivo.constitución);
    }
    else if (personajeObjetivo.clase === "Clerigo") {
        personajeObjetivo.equipamiento = [{name: "Maza", type: "Weapon", damage: "1d6"}, {name: "Cota de malla", type: "Armor", armorClass: 16}, {name: "Escudo", type: "Shield", armorClass: 2}, {name: "Simbolo sagrado", type: "HolySymbol"}, {name: "Ballesta ligera", type: "Weapon", damage: "1d8"}];
        personajeObjetivo.puntosDeVida = 8 + encontrarModificador(personajeObjetivo.constitución);
    }
    else if (personajeObjetivo.clase === "Guerrero") {
        personajeObjetivo.equipamiento = [{name: "Espada larga", type: "Weapon", damage: "1d8"}, {name: "Armadura de placas", type: "Armor", armorClass: 18}, {name: "Escudo", type: "Shield", armorClass: 2}, {name: "Ballesta ligera", type: "Weapon", damage: "1d8"}];
        personajeObjetivo.puntosDeVida = 10 + encontrarModificador(personajeObjetivo.constitución);
    }
    else if (personajeObjetivo.clase === "Mago") {
        personajeObjetivo.equipamiento = [{name: "Baston", type: "Weapon", damage: "1d6"}, {name: "Armadura de cuero", type: "Armor", armorClass: 11}, {name: "Daga", type: "Weapon", damage: "1d4"}, {name: "Libro de hechizos", type: "Spellbook"}];
        personajeObjetivo.puntosDeVida = 6 + encontrarModificador(personajeObjetivo.constitución);
    }
    else if (personajeObjetivo.clase === "Pícaro") {
        personajeObjetivo.equipamiento = [{name: "Dagas", type: "Weapon", damage: "2d4"}, {name: "Armadura de cuero", type: "Armor", armorClass: 11}, {name: "Arco corto", type: "Weapon", damage: "1d6"}];
        personajeObjetivo.puntosDeVida = 8 + encontrarModificador(personajeObjetivo.constitución);
    }
}

/**
 * se usa una formula para calcular el modificador de una estadistica
 * @param {*} estadistica dada estadistica de un personaje, se calculará su modificador
 * @returns devuelve el modificador de la estadistica
 */
function encontrarModificador (estadistica) {
    let modificador = Math.floor((estadistica - 10) / 2);
    return modificador;
}

/**
 * 
 * @returns un numero aleatorio entre 3 y 18, imita el lanzamiento de 4 dados de 6 caras y se queda con los 3 mayores
 */
function generarEstadistica () {
    let resultados = [];
    for (let i = 0; i < 4; i++) {
        resultados.push(Math.floor(Math.random() * 6) + 1);
    }
    resultados.sort();
    return resultados[1] + resultados[2] + resultados[3];
}