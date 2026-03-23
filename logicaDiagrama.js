// Tus selectores se quedan igual
const cable_a = document.getElementById('line-a');
const botonA1 = document.getElementById('and-btn-a1');
const botonA0 = document.getElementById('and-btn-a0');

const cable_b = document.getElementById('line-b');
const botonB1 = document.getElementById('and-btn-b1');
const botonB0 = document.getElementById('and-btn-b0');

const bombillo = document.getElementById('bombillo');
const clableBombillo = document.getElementById('line-bombillo');

// Inicializamos en 0
let variable_a = 0;
let variable_b = 0;

// Reducimos las dos funciones setLogic a una sola lógica genérica
function setLogicAndA(valor) {
    variable_a = valor;
    const activa = (valor === 1);

    // Usamos toggle con condición: (clase, booleano)
    cable_a.classList.toggle('active', activa);
    botonA1.classList.toggle('btn-activo', activa);
    botonA0.classList.toggle('btn-activo', !activa);

    verificarBombillo();
}

function setLogicAndB(valor) {
    variable_b = valor;
    const activa = (valor === 1);

    cable_b.classList.toggle('active', activa);
    botonB1.classList.toggle('btn-activo', activa);
    botonB0.classList.toggle('btn-activo', !activa);

    verificarBombillo();
}

function verificarBombillo() {
    // La lógica pura de la compuerta AND
    const encender = (variable_a === 1 && variable_b === 1);

    clableBombillo.classList.toggle('active', encender);
    bombillo.classList.toggle('luz-encendida', encender);
}

const cableOrA = document.getElementById('or-line-a');
const botonOrA1 = document.getElementById('or-btn-a1');
const botonOrA0 = document.getElementById('or-btn-a0');

const cableOrB = document.getElementById('or-line-b');
const botonOrB1 = document.getElementById('or-btn-b1');
const botonOrB0 = document.getElementById('or-btn-b0');

const bombilloOr = document.getElementById('bombillo-or');
const clableBombilloOr = document.getElementById('or-line-bombillo');

let variableOrA = 0;
let variableOrB = 0;

// Reducimos las dos funciones setLogic a una sola lógica genérica
function setLogicOrA(valor) {
    variableOrA = valor;
    const activa = (valor === 1);

    // Usamos toggle con condición: (clase, booleano)
    cableOrA.classList.toggle('active', activa);
    botonOrA1.classList.toggle('btn-activo', activa);
    botonOrA0.classList.toggle('btn-activo', !activa);

    verificarBombilloOr();
}

function setLogicOrB(valor) {
    variableOrB = valor;
    const activa = (valor === 1);

    cableOrB.classList.toggle('active', activa);
    botonOrB1.classList.toggle('btn-activo', activa);
    botonOrB0.classList.toggle('btn-activo', !activa);

    verificarBombilloOr();
}

function verificarBombilloOr() {
    // La lógica pura de la compuerta OR
    const encender = (variableOrA === 1 || variableOrB === 1);

    clableBombilloOr.classList.toggle('active', encender);
    bombilloOr.classList.toggle('luz-encendida', encender);
}

const cableNot = document.getElementById('not-line');
const botonNotA1 = document.getElementById('not-btn-a1');
const botonNotA0 = document.getElementById('not-btn-a0');

const bombilloNot = document.getElementById('bombillo-not');
const clableBombilloNot = document.getElementById('not-line-bombillo');

let variableNotA = 0;
let variableNotB = 0;

// Reducimos las dos funciones setLogic a una sola lógica genérica
function setLogicNotA(valor) {
    variableNotA = valor;
    const activa = (valor === 1);

    // Usamos toggle con condición: (clase, booleano)
    cableNot.classList.toggle('active', activa);
    botonNotA1.classList.toggle('btn-activo', activa);
    botonNotA0.classList.toggle('btn-activo', !activa);

    verificarBombilloNot();
}

function setLogicNotB(valor) {
    variableNotB = valor;
    const activa = (valor === 1);

    cableNot.classList.toggle('active', activa);
    botonNotB1.classList.toggle('btn-activo', activa);
    botonNotB0.classList.toggle('btn-activo', !activa);

    verificarBombilloNot();
}

function verificarBombilloNot() {
    // La lógica pura de la compuerta NOT
    const encender = (variableNotA === 0);

    clableBombilloNot.classList.toggle('active', encender);
    bombilloNot.classList.toggle('luz-encendida', encender);
}