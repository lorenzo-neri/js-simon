/* 

Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

*/

let now = new Date();
console.log(now);

let endCountdown = new Date(now);

calculatingTime(now, endCountdown);

//funzione per calcolare il tempo rimanente fino alle 9:30 di domani mattina
function calculatingTime(firstDate, secondDate) {
    //aggiungo un giorno a oggi
    secondDate.setDate(firstDate.getDate() + 1);
    //setto l'orario
    secondDate.setHours(9, 30, 0, 0);
    console.log(secondDate);

    //faccio la differenza tra la data di oggi e quella di domani
    const remainingTime = secondDate - firstDate;
    console.log(remainingTime); //in millisecondi
    console.log(remainingTime / 1000); //in secondi

    //secondi
    const seconds = Math.floor((remainingTime % 60000) / 1000);
    console.log(seconds);
    //minuti
    const minutes = Math.floor((remainingTime % 3600000) / 60000);
    console.log(minutes);
    //ore
    const hours = Math.floor(remainingTime / 3600000);
    console.log(hours);

    return seconds, minutes, hours;
}
