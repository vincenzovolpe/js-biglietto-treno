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
if (isNaN(kmetri)) { // Controllo se km inserito è un numero
    document.getElementById('notnumber').setAttribute("class", "visibile");
} else if (! (kmetri > 0 )) { // Controllo se km inserito è > 0
    document.getElementById('notpositive').setAttribute("class", "visibile");
} else {
    var eta = prompt('Quanti anni hai?'); // richiesta età dell'utente
    if (isNaN(eta)) { // Controllo se l'età inserita è un numero
        document.getElementById('notnumber').setAttribute("class", "visibile");
    } else if (! (eta > 0 )) { // Controllo se l'età inserita è > 0
        document.getElementById('notpositive').setAttribute("class", "visibile");
    } else {
        if (eta >= 18 && eta <= 65) {
            document.getElementById('messaggio').setAttribute("class", "visibile");
            document.getElementById('costobiglietto').innerHTML = costobigliettointero;
        } else if (eta < 18){
            document.getElementById('messaggio').setAttribute("class", "visibile");
            document.getElementById('costobiglietto').innerHTML = costobiglietto20;
        } else {
            document.getElementById('messaggio').setAttribute("class", "visibile");
            document.getElementById('costobiglietto').innerHTML = costobiglietto40;
        }
    }
}
