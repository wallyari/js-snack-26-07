/* 
 *  SNACK 2 - advancedCalculus()
 *  Chiedere all'utente un numero e stampare in pagina la tabellina 
 *  del 3 fino al multiplo scelto dall'utente
*/

let userNumber;

do {
    userNumber =  parseInt(prompt('Inserisci un numero'));
} while (userNumber > 1);

const mainList = document.getElementById('main-list');

for (let i = 1; i <= userNumber; i++) {
    const listItem = document.createElement('li');

    listItem.innerHTML = '3 * ' + i + ' = ';
    let product = i * 3;
    listItem.innerHTML = product;

    mainList.append(listItem);    
}

// Riga11 - userNumber> 1 (non potevano essere selezionati altri operatori che non fossero 0 e 1)
// inversione di "> 1 " con "< 1" per rendere disponibile la selezione di tutti i valori al di sopra di 1.