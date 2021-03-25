//Funzione con parametri 
//base e altezza sono PARAMETRI 
//tutto ciò che è nella parentesi tonde si chiama FIRMA
function calcolaArea(base, altezza){
    var area = base * altezza;    
    return area;
}

//stampo in console il valore restituito dalla funzione
console.log(calcolaArea(5,8));

console.log("L'area della tua figura misura " + calcolaArea(6,9));

//Esempio
//nella var area sottostante registro l'output
//della funzione calcolaArea()
var area = calcolaArea(5,4);

console.log(area);

var elDemo = document.getElementById("demo");
elDemo.innerHTML = "L'area della figura misura: " + area;

function calcolaVolume(area, profondita){
    var volume = area * profondita;
    return volume;
}

console.log(calcolaVolume(area, 7));

var volume = calcolaVolume(area, 9);

elDemo.innerHTML += "<br>Il volume invece misura " + volume;


function calcolaAreaVolume (base, altezza, profondita) {
    var area = base * altezza;
    var volume = area * profondita
    console.log(area + ' ' + volume);
}

calcolaAreaVolume(3,4,10);






