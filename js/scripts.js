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


//  MAIL   //

// - Chiedi all'utente la sua email,
const email = document.getElementById('email');
console.log('email', email, typeof email);


// - controlla che sia nella lista di chi può accedere,

    // - creazione della lista

const verifiedEmails = [
    '@hotmail.it', //0
    '@hotmail.com', //1
    '@outlook.it', //2
    '@gmail.com', //3
    '@yahoo.com' //4
];

console.log('verifiedEmails', verifiedEmails, verifiedEmails.length, typeof verifiedEmails);


let i = 0;
console.log('L\'elemento in posizione' + i + 'è:', verifiedEmails[i]);
i++;
console.log('L\'elemento in posizione' + i + 'è:', verifiedEmails[i]);
i++;
console.log('L\'elemento in posizione' + i + 'è:', verifiedEmails[i]);
i++;
console.log('L\'elemento in posizione' + i + 'è:', verifiedEmails[i]);
i++;
console.log('L\'elemento in posizione' + i + 'è:', verifiedEmails[i]);
i++;


