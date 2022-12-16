/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di 
azzurro ed emetto
 un messaggio in console con il numero della cella cliccata.
MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che 
vediamo nell'immagine allegata.
MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle 
tramite JS. Al click del bottone play, 
vengono generate 100 celle in 10 righe da 10 celle ciascuna.
MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console,
poi coloriamo la cella d'azzurro!
*/

// prendo gli elementi in pagina  
const button = document.getElementById('play');
const grid = document.getElementById('my-container');
const dificultLevelField = document.getElementById('difficult-level');

//! creo una funzione per generare le caselle ---------------

const createcell = () =>{
    const cell = document.createElement('div')
    cell.classList.add('cell', cellClas)
    return cell;
}
//! creo una funzione per rimuovere le celle dal dom
function resetButton() {
     // Rimuovo tutte le celle dalla griglia
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
  }

let isReset = false;
let cellClas = ('')

button.addEventListener('click', function() {
    dificultLevel = dificultLevelField.value
    console.log(dificultLevel)
    let rows = 0;
    let colls = 0;
    
    if(dificultLevel === 'easy'){
        rows = 10;
        colls = 10;
        cellClas = ('easy')
    }else if (dificultLevel === 'medium'){
        rows = 9;
        colls = 9;
        cellClas = ('medium')
    }else if(dificultLevel === 'hard'){
        rows = 7;
        colls = 7;
        cellClas = ('hard')
    }

   
    const totalCells = rows * colls;
    // genero un avento al clik del bottone

    if (isReset) {
    resetButton()
    button.innerText = 'new game'
    // Imposto isReset a false
    isReset = false;
  } else {
   
    for (let i = 1; i <= totalCells; i++) {
      const cell = createcell();
      cell.append(i);

      cell.addEventListener('click', function() {
        cell.classList.toggle('cliked');
        console.log(i)
      });

      grid.appendChild(cell);
    }
    button.innerText = 'reset'
    // Imposto isReset a true
    isReset = true;
  }
});




