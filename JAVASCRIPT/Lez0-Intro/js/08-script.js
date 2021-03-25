//Metodi per stringhe
//ANche le stringhe sono 0-based 

var txt = 'Comincio ad avere fame';

var lunghezza = txt.length;
console.log(lunghezza);

//Ricerca
var ric1 = txt.indexOf('fame'); //l'indice in compare per la prima volta quella parola o quella lettera
console.log(ric1);

var ric2 = txt.indexOf('o');
console.log(ric2);

var ric3 = txt.indexOf('Ciao'); //-1 quando non trova la lettera o la parola 
console.log(ric3);

var ric4 = txt.lastIndexOf('o');
console.log(ric4);

var ric5 = txt.charAt(0);
console.log(ric5);

var ric6 = txt.charCodeAt(0);
console.log(ric6);

//Taglio o estraggo
var stringa = "Tra poco mangio una pizza";

var sl = stringa.slice(10, 20);
console.log(sl);

var sub = stringa.substring(0, stringa.length-5);
console.log(sub);

//Sostituzione

var stringa2 = "Edge è il miglior browser al mondo";

var rep = stringa2.replace("Edge", "Chrome");

console.log(rep);

//VARI
var rep = rep.toUpperCase();
console.log(rep);

var ciao = "NON URLARE IN CHAT";
var low = ciao.toLocaleLowerCase();
console.log(low);

var arrayTest = ["Ciao", "come", "stai"];
var ricerca = arrayTest.indexOf("Pippo");
console.log(ricerca);

var ricerca2 = arrayTest.indexOf("Ciao")
console.log(ricerca2);