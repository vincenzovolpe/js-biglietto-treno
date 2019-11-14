// Costo del biglietto per km
const costoperkm = 0.21;

// Percentuali di sconto dei biglietti
const sconto20 = 20; //sconto 20% per minorenni (< 18 anni)
const sconto40 = 40; //sconto 40% per pensionati (> 65 anni)

// Richiesta km da percorrere
var kmetri = prompt('Quanti chilometri vuoi percorrere?');

// Calcolo del costo del biglietto intero
var costobigliettointero = (kmetri * costoperkm).toFixed(2);

// Calcolo del costo del biglietto scontato del 20%
var costobiglietto20 = (costobigliettointero - (costobigliettointero * (sconto20 / 100))).toFixed(2);

// Calcolo del costo del biglietto scontato del 40%
var costobiglietto40 = (costobigliettointero - (costobigliettointero * (sconto40 / 100))).toFixed(2);


// Controllo km inseriti ed richiesta e controllo età del cliente e stampa relativo messaggio di costo del biglietto
if (isNaN(kmetri)) {
    alert("Il valore inserito non è numerico");
} else if (! (kmetri > 0 )) {
    alert("Il valore inserito è un numero negativo");
} else {
    var eta = prompt('Quanti anni hai?'); // richiesta età dell'utente
    if (isNaN(eta)) {
        alert("Il valore inserito non è numerico");
    } else if (! (eta > 0 )) {
        alert("Il valore inserito è un numero negativo");
    } else {
        if (eta >= 18 && eta <= 65) {
            //alert("Il costo del tuo biglietto è di Euro: " + costobigliettointero);
            document.writeln("Il costo del tuo biglietto è di Euro: " + costobigliettointero);
        } else if (eta < 18){
            //alert("Il costo del tuo biglietto è di Euro (scontato del 20%): " + costobiglietto20);
            document.writeln("Il costo del tuo biglietto è di Euro: " + costobiglietto20);
        } else {
            //alert("Il costo del tuo biglietto è di Euro (scontato del 40%): " + costobiglietto40);
            document.writeln("Il costo del tuo biglietto è di Euro: " + costobiglietto40);
        }
    }
}
