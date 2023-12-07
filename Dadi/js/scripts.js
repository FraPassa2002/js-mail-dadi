/*

Mail
    - Chiedi all'utente la sua email,
    - controlla che sia nella lista di chi può accedere,
        - creazione della lista
        - controllo di chi puo accedere alla lista
    - stampa un messaggio appropriato sull'esito del controllo.

Gioco dei dadi
    - Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    - Stabilire il vincitore, in base a chi fa il punteggio più alto.
    - Prima di partire a scrivere codice poniamoci qualche domanda:
        - Che ci sia un array da qualche parte?
        - Se dobbiamo confrontare qualcosa che "cosa" ci serve?

*/


// GIOCO DEI DADI //
const min = 1;
const max = 6;

const numPlayer = Math.floor (Math.random() * (max - min + 1)) + min;
console.log('numPlayer', numPlayer, typeof numPlayer);

const numComputer = Math.floor (Math.random() * (max - min + 1)) + min;
console.log('numComputer', numComputer, typeof numComputer);

if (numPlayer > numComputer) {
    alert('hai vinto', `${numPlayer} vs. ${numComputer}`);
}

else if (numPlayer < numComputer) {
    alert('hai perso', `${numPlayer} vs. ${numComputer}`);
}

else {
    alert('Pareggio', `${numPlayer} vs. ${numComputer}`);
}

/////////////// FINE ///////////////////