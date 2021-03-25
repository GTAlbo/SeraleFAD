//Dichiaro la prima funzione
function saluta() {
    alert("Ciao Dario ");
}

//Richiamo la funzione
saluta();


//------------
ciao();

function ciao(){
document.write("Ciao")
}


//------------
//var globale
var persona = ""; 

function getNome(){
    persona = prompt("Digita il tuo nome");
}

getNome();

console.log(persona);


function benvenuto(){
    //variabile locale
    var messaggio = "Ciao " + persona + ", buona lezione!";
    //console.log(messaggio);
    return messaggio;
}


benvenuto();

//console.log(messaggio); //non sa che cosa è messaggio

// console.log(benvenuto());

