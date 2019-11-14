// Richiesta km da percorrere e  età all'utente
var kmetri = prompt('Quanti chilometri vuoi percorrere?');



var eta = prompt('Quanti anni hai?');

// Costo del biglietto al km
const costoperkm = 0.21;

// Percentuali di sconto
const sconto20 = 20; //sconto 20% per minorenni (< 18 anni)
const sconto40 = 40; //sconto 40% per pensionati (> 65 anni)

// Calcolo del costo del biglietto intero
var costobigliettointero = kmetri * costoperkm;


// Calcolo del costo del biglietto scontato del 20%
var costobiglietto20 = (costobigliettointero - (costobigliettointero * (sconto20 / 100)));

// Calcolo del costo del biglietto scontato del 40%
var costobiglietto40 = (costobigliettointero - (costobigliettointero * (sconto40 / 100)));


// Controllo età del cliente e relativo messaggio di costo del biglietto
if (isNaN(eta)) {
    alert("Il valore inserito non è numerico");
} else if (! (eta > 0 )) {
    alert("Il valore inserito è un numero negativo");
} else {
    if (eta >= 18 && eta <= 65) {
        alert("Il costo del tuo biglietto è di Euro: " + costobigliettointero);
    } else if (eta < 18){
        alert("Il costo del tuo biglietto è di Euro: " + costobiglietto20);
    } else {
        alert("Il costo del tuo biglietto è di Euro: " + costobiglietto40);
    }
}
