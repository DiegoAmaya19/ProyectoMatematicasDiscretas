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

// Combo 1: (A AND B) OR C
const combo1CableA = document.getElementById('combo1-line-a');
const combo1BotonA1 = document.getElementById('combo1-btn-a1');
const combo1BotonA0 = document.getElementById('combo1-btn-a0');

const combo1CableB = document.getElementById('combo1-line-b');
const combo1BotonB1 = document.getElementById('combo1-btn-b1');
const combo1BotonB0 = document.getElementById('combo1-btn-b0');

const combo1CableC = document.getElementById('combo1-line-c');
const combo1BotonC1 = document.getElementById('combo1-btn-c1');
const combo1BotonC0 = document.getElementById('combo1-btn-c0');

const combo1Bombillo = document.getElementById('bombillo-combo1');
const combo1CableBombillo = document.getElementById('combo1-line-bombillo');

let combo1A = 0;
let combo1B = 0;
let combo1C = 0;

function setCombo1A(valor) {
    combo1A = valor;
    const activa = (valor === 1);
    combo1CableA.classList.toggle('active', activa);
    combo1BotonA1.classList.toggle('btn-activo', activa);
    combo1BotonA0.classList.toggle('btn-activo', !activa);
    verificarCombo1();
}

function setCombo1B(valor) {
    combo1B = valor;
    const activa = (valor === 1);
    combo1CableB.classList.toggle('active', activa);
    combo1BotonB1.classList.toggle('btn-activo', activa);
    combo1BotonB0.classList.toggle('btn-activo', !activa);
    verificarCombo1();
}

function setCombo1C(valor) {
    combo1C = valor;
    const activa = (valor === 1);
    combo1CableC.classList.toggle('active', activa);
    combo1BotonC1.classList.toggle('btn-activo', activa);
    combo1BotonC0.classList.toggle('btn-activo', !activa);
    verificarCombo1();
}

function verificarCombo1() {
    const encender = (combo1A === 1 && combo1B === 1) || combo1C === 1;
    combo1CableBombillo.classList.toggle('active', encender);
    combo1Bombillo.classList.toggle('luz-encendida', encender);
}

// Combo 2: (A OR B) AND NOT C
const combo2CableA = document.getElementById('combo2-line-a');
const combo2BotonA1 = document.getElementById('combo2-btn-a1');
const combo2BotonA0 = document.getElementById('combo2-btn-a0');

const combo2CableB = document.getElementById('combo2-line-b');
const combo2BotonB1 = document.getElementById('combo2-btn-b1');
const combo2BotonB0 = document.getElementById('combo2-btn-b0');

const combo2CableC = document.getElementById('combo2-line-c');
const combo2BotonC1 = document.getElementById('combo2-btn-c1');
const combo2BotonC0 = document.getElementById('combo2-btn-c0');

const combo2Bombillo = document.getElementById('bombillo-combo2');
const combo2CableBombillo = document.getElementById('combo2-line-bombillo');

let combo2A = 0;
let combo2B = 0;
let combo2C = 0;

function setCombo2A(valor) {
    combo2A = valor;
    const activa = (valor === 1);
    combo2CableA.classList.toggle('active', activa);
    combo2BotonA1.classList.toggle('btn-activo', activa);
    combo2BotonA0.classList.toggle('btn-activo', !activa);
    verificarCombo2();
}

function setCombo2B(valor) {
    combo2B = valor;
    const activa = (valor === 1);
    combo2CableB.classList.toggle('active', activa);
    combo2BotonB1.classList.toggle('btn-activo', activa);
    combo2BotonB0.classList.toggle('btn-activo', !activa);
    verificarCombo2();
}

function setCombo2C(valor) {
    combo2C = valor;
    const activa = (valor === 1);
    combo2CableC.classList.toggle('active', activa);
    combo2BotonC1.classList.toggle('btn-activo', activa);
    combo2BotonC0.classList.toggle('btn-activo', !activa);
    verificarCombo2();
}

function verificarCombo2() {
    const encender = (combo2A === 1 || combo2B === 1) && combo2C === 0;
    combo2CableBombillo.classList.toggle('active', encender);
    combo2Bombillo.classList.toggle('luz-encendida', encender);
}

// Combo 3: NOT (A AND B)
const combo3CableA = document.getElementById('combo3-line-a');
const combo3BotonA1 = document.getElementById('combo3-btn-a1');
const combo3BotonA0 = document.getElementById('combo3-btn-a0');

const combo3CableB = document.getElementById('combo3-line-b');
const combo3BotonB1 = document.getElementById('combo3-btn-b1');
const combo3BotonB0 = document.getElementById('combo3-btn-b0');

const combo3Bombillo = document.getElementById('bombillo-combo3');
const combo3CableBombillo = document.getElementById('combo3-line-bombillo');

let combo3A = 0;
let combo3B = 0;

function setCombo3A(valor) {
    combo3A = valor;
    const activa = (valor === 1);
    combo3CableA.classList.toggle('active', activa);
    combo3BotonA1.classList.toggle('btn-activo', activa);
    combo3BotonA0.classList.toggle('btn-activo', !activa);
    verificarCombo3();
}

function setCombo3B(valor) {
    combo3B = valor;
    const activa = (valor === 1);
    combo3CableB.classList.toggle('active', activa);
    combo3BotonB1.classList.toggle('btn-activo', activa);
    combo3BotonB0.classList.toggle('btn-activo', !activa);
    verificarCombo3();
}

function verificarCombo3() {
    const encender = !(combo3A === 1 && combo3B === 1);
    combo3CableBombillo.classList.toggle('active', encender);
    combo3Bombillo.classList.toggle('luz-encendida', encender);
}