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


//  EMAIL   //

// - Chiedi all'utente la sua email,
const userEmail = prompt('Inserisci la tua Email:');
console.log('userEmail', userEmail, typeof userEmail);


// - controlla che sia nella lista di chi può accedere,

    // - creazione della lista


const validEmails = [
    'a@a.a',
    'b@b.b', 
    'c@c.c' 
];

console.log('validEmails', validEmails, typeof validEmails);

let canEnter = false;

for (let i = 0; i < validEmails.length; i++) {
    // console.log(i, validEmails[i]);

    if (validEmails[i] == userEmail) {
        // alert('Puoi entrare');

        canEnter = true;

        //stoppo il ciclo
        i = validEmails.length;
    }
}

if (canEnter == false) {
    alert('Non puoi entrare');
}
else {
    alert('Puoi entrare');
}

/////////////// FINE ///////////////////
