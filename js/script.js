/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Procediamo milestone per milestone senza invertire l'ordine.
Cerchiamo di fare almeno un commit per ogni milestone!

//# MILESTONE 1
//Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.

//#MILESTONE 2
//Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. 
//Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.

#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;

#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!

# BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

//*FUNZIONI
function createCell(content){
    const cell = document.createElement('div');
    cell.className= 'cell';
    cell.innerText = content;
    return cell;
}

// !1- Recupero gli elementi con l'id
const buttonPlay = document.getElementById('play');
const gridNumber = document.getElementById('grid');


// !2- Mi preparo delle condizioni inziali
const rows = 10;
const cells = 10;
const totalCells= rows * cells;


// !3- Creo le celle per 100 volte e li metto in pagina
for (let i = 1; i <= totalCells; i++){

    //Creo la cella 
    const cell = createCell(i);

    //Aggancio la cella alla griglia
    gridNumber.append(cell);
}


// !4-Faccio comparire la griglia 
buttonPlay.addEventListener('click', function(){
    gridNumber.classList.add('active');
})