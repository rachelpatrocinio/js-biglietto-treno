//chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

// DICHIARO UNA VARIABILE PER RICHIEDERE L'ETA' DELL'UTENTE
const userAge = parseInt(prompt("Quanti anni hai?")); //num
//console.log(userAge);

// DICHIARO UNA VARIABILE PER RICHIEDERE I KM DA PERCORRERE
const km = parseInt(prompt("Quanti km farai?")); //num
//console.log(km);

// calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
let ticketPrice = (km * 0.21).toFixed(2); //num
//console.log(ticketPrice.toFixed(2), "€ Full Price");

//L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, per indicare centesimi sul prezzo.
// IF utente è minorenne, il prezzo sarà scontato del 20%
// ELSE IF utente è over 65, il prezzo sarà scontato del 40%
// ELSE prezzo normale
if (userAge < 18){
    //console.log(userAge, "You are a Minor");
    console.log(ticketPrice, "€ Original Price");
    ticketPrice = (ticketPrice - ticketPrice * 0.2).toFixed(2);
    console.log(ticketPrice, "€ Final Price with 20% of Discount.");
} else if(userAge >= 65){
    //console.log(userAge,"You are a Senior Citizen.");
    console.log(ticketPrice, "€ Original Price");
    ticketPrice = (ticketPrice - ticketPrice * 0.4).toFixed(2);
    console.log(ticketPrice, "€ Final Price with 40% of Discount.");
}
else{
    console.log(ticketPrice, "€ Final Price");
}










