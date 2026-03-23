/**
 * Evaluación booleana y animación de cables (.wire): entradas A,B,C… y salida OUT.
 * Los circuitos combinados usan t1, t2 para señales entre compuertas (debe coincidir con el SVG).
 */
const simulations = {
    and: {
        inputs: ['A', 'B'],
        evaluate: ({A, B}) => A && B
    },
    or: {
        inputs: ['A', 'B'],
        evaluate: ({A, B}) => A || B
    },
    not: {
        inputs: ['A'],
        evaluate: ({A}) => !A
    },
    combo: {
        inputs: ['A', 'B', 'C'],
        evaluate: ({A, B, C}) => (A && B) || !C
    },
    combo2: {
        inputs: ['A', 'B', 'C'],
        evaluate: ({A, B, C}) => (A || B) && C
    },
    combo3: {
        inputs: ['A', 'B', 'C', 'D'],
        evaluate: ({A, B, C, D}) => (A && B) && (C || D)
    },
    combo4: {
        inputs: ['A', 'B', 'C'],
        evaluate: ({A, B, C}) => !(A || B) && C
    },
    combo5: {
        inputs: ['A', 'B', 'C'],
        evaluate: ({A, B, C}) => A && (B || !C)
    }
};

function clampBinary(v) {
    const num = Number(v);
    return (Number.isNaN(num) || (num !== 0 && num !== 1)) ? 0 : num;
}

function setCardState(card, values, result) {
    const simKey = card.dataset.sim;
    const wires = card.querySelectorAll('.wire');

    wires.forEach(path => {
        const key = path.dataset.input;
        if (key === 'OUT') return;
        
        let shouldActivate = false;
        
        // Calcular valores intermedios según el circuito
        if (simKey === 'combo') {  // (A && B) || !C
            if (key === 't1') shouldActivate = values['A'] && values['B'];  // A && B
            else if (key === 't2') shouldActivate = !values['C'];  // NOT(C)
            else shouldActivate = values[key];
        } else if (simKey === 'combo2') {  // (A || B) && C
            if (key === 't1') shouldActivate = values['A'] || values['B'];  // A || B
            else shouldActivate = values[key];
        } else if (simKey === 'combo3') {  // (A && B) && (C || D)
            if (key === 't1') shouldActivate = values['A'] && values['B'];  // A && B
            else if (key === 't2') shouldActivate = values['C'] || values['D'];  // C || D
            else shouldActivate = values[key];
        } else if (simKey === 'combo4') {  // !(A || B) && C
            if (key === 't1') shouldActivate = values['A'] || values['B'];  // A || B
            else if (key === 't2') shouldActivate = !(values['A'] || values['B']);  // NOT(A || B)
            else shouldActivate = values[key];
        } else if (simKey === 'combo5') {  // A && (B || !C)
            if (key === 't1') shouldActivate = !values['C'];  // NOT(C)
            else if (key === 't2') shouldActivate = values['B'] || !values['C'];  // B || NOT(C)
            else shouldActivate = values[key];
        } else {
            // Para otros circuitos simples
            shouldActivate = values[key];
        }
        
        shouldActivate ? path.classList.add('active') : path.classList.remove('active');
    });

    const wireOut = card.querySelector('.wire[data-input="OUT"]');
    const bulb = card.querySelector('.bulb-element');

    if (result) {
        wireOut?.classList.add('active');
        bulb?.classList.add('bulb-active');
    } else {
        wireOut?.classList.remove('active');
        bulb?.classList.remove('bulb-active');
    }

    const outputLabel = card.querySelector('.output-value');
    if (outputLabel) outputLabel.textContent = `${result ? 1 : 0} (${result ? 'ON' : 'OFF'})`;
}

function readInputs(card, config) {
    const values = {};
    config.inputs.forEach(name => {
        const input = card.querySelector(`.logic-input[data-input="${name}"]`);
        let value = input ? clampBinary(input.value) : 0;
        if (input) input.value = value;
        values[name] = Boolean(value);
    });
    return values;
}

function evaluateCard(card) {
    const key = card.dataset.sim;
    const config = simulations[key];
    if (!config) return;

    const values = readInputs(card, config);
    const result = config.evaluate(values);
    setCardState(card, values, result);
    return result;
}

function buildTruthTable(card) {
    const key = card.dataset.sim;
    const config = simulations[key];
    if (!config) return;

    const tbody = card.querySelector('.truth-table tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const rows = 1 << config.inputs.length;
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        const rowValues = {};

        config.inputs.forEach((name, idx) => {
            const bit = (i >> (config.inputs.length - idx - 1)) & 1;
            rowValues[name] = Boolean(bit);
            const td = document.createElement('td');
            td.textContent = String(bit);
            row.appendChild(td);
        });

        const out = config.evaluate(rowValues);
        const outTd = document.createElement('td');
        outTd.textContent = String(out ? 1 : 0);
        row.appendChild(outTd);

        const testTd = document.createElement('td');
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = 'Probar';
        button.addEventListener('click', () => {
            config.inputs.forEach(name => {
                const inputEl = card.querySelector(`.logic-input[data-input="${name}"]`);
                if (inputEl) inputEl.value = rowValues[name] ? 1 : 0;
            });
            evaluateCard(card);
        });
        testTd.appendChild(button);
        row.appendChild(testTd);

        tbody.appendChild(row);
    }
}

function init() {
    document.querySelectorAll('.simulation-card').forEach(card => {
        buildTruthTable(card);
        card.querySelectorAll('.logic-input').forEach(input => {
            input.addEventListener('change', () => evaluateCard(card));
            input.addEventListener('keyup', () => evaluateCard(card));
        });
        evaluateCard(card);
    });
}

document.addEventListener('DOMContentLoaded', init);
