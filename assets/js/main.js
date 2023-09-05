/* 

Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

*/

let countdownEl = document.getElementById('countdown');

// Aggiorna il countdown ogni secondo
setInterval(updateCountdown, 1000);

// Inizializza il countdown all'avvio
updateCountdown();


// ##################### FUNCTIONS ##################### 

// Funzione per calcolare il tempo rimanente fino alle 9:30 di domani mattina
function calculatingTime() {

    let now = new Date();
    console.log(now);

    let endCountdown = new Date(now);

    // Aggiungo un giorno a oggi
    endCountdown.setDate(now.getDate() + 1);

    // Imposto l'orario a 9:30 di domani mattina
    endCountdown.setHours(9, 30, 0, 0);

    // Calcolo la differenza tra la data corrente e le 9:30 di domani mattina
    const remainingTime = endCountdown - now;
    
    return remainingTime;
}

// Funzione per aggiornare il countdown
function updateCountdown() {

    // Calcolo ore, minuti e secondi rimanenti
    
    //seconds
    let seconds = Math.floor((calculatingTime() % 60000) / 1000);
    console.log(seconds);

    //minutes
    let minutes = Math.floor((calculatingTime() % 3600000) / 60000);
    console.log(minutes);

    //hours
    let hours = Math.floor(calculatingTime() / 3600000);
    console.log(hours);

    if (hours <= 0 && minutes <= 0 && seconds <= 0) {
        countdownEl.innerHTML = 'LEZIONE INIZIATA!!!';
    } else {
        countdownEl.innerHTML = `Tempo rimanente = ${hours}:${minutes}:${seconds}`;
    }
}











/* let now = new Date();
console.log(now);

let endCountdown = new Date(now);

let countdownEl = document.getElementById('countdown');

//aggiorna countdown ogni secondo
//setInterval(updateCountdown(calculatingTime(now, endCountdown)), 1000);

setInterval(() => {
    updateCountdown(calculatingTime(now, endCountdown));
}, 1000);

updateCountdown(calculatingTime(now, endCountdown));

//countdownEl.innerHTML = calculatingTime(now, endCountdown); <-- sbagliato, mostra solo l'ultimo valore e non si aggiorna automaticamente

// ##################### FUNCTIONS ##################### 

//funzione per calcolare il tempo rimanente fino alle 9:30 di domani mattina
function calculatingTime(firstDate, secondDate) {
    //aggiungo un giorno a oggi
    secondDate.setDate(firstDate.getDate() + 1);
    //setto l'orario
    secondDate.setHours(9, 30, 0, 0);
    //console.log(secondDate);

    //faccio la differenza tra la data di oggi e quella di domani
    const remainingTime = secondDate - firstDate;
    //console.log(remainingTime); //in millisecondi
    //console.log(remainingTime / 1000); //in secondi


    return remainingTime;
}

//funzione per aggiornare il countdown
function updateCountdown(functionCountdown) {

    //const updateRemainingTime = functionCountdown;

    //secondi
    let seconds = Math.floor((functionCountdown % 60000) / 1000);
    //console.log(seconds);
    //minuti
    let minutes = Math.floor((functionCountdown % 3600000) / 60000);
    //console.log(minutes);
    //ore
    let hours = Math.floor(functionCountdown / 3600000);

    //console.log(hours);

    if (hours <= 0 && minutes <= 0 && seconds <= 0) {
        countdownEl.innerHTML = 'LEZIONE INIZIATA!!!';
    } else {
        countdownEl.innerHTML = `Tempo rimanente = ${hours}:${minutes}:${seconds}`;
    }

} */