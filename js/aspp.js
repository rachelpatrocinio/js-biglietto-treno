//chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

// DICHIARO UNA VARIABILE PER RICHIEDERE L'ETA' DELL'UTENTE
const userAge = parseInt(prompt("Quanti anni hai?")); //num
console.log("Age:",userAge);

// DICHIARO UNA VARIABILE PER RICHIEDERE I KM DA PERCORRERE
const km = parseInt(prompt("Quanti km farai?")); //num
console.log("Km:",km);

// Validazione dei dati
// km > 0
// userAge > 0
// km && userAge are not NaN

if (km > 0 && 
    userAge > 0 &&
    !isNaN(km) &&
    !isNaN(userAge)){
    // calcolare il prezzo totale del viaggio, secondo queste regole:
    // il prezzo del biglietto è definito in base ai km (0.21 € al km)
    const ticketPrice = km * 0.21; //num
    console.log("Full Price:",ticketPrice.toFixed(2), "€");

    //L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, per indicare centesimi sul prezzo.
    // IF utente è minorenne, il prezzo sarà scontato del 20%
    // ELSE IF utente è over 65, il prezzo sarà scontato del 40%
    // ELSE prezzo normale
    let discount = 0;
    if (userAge < 18){
        //console.log(userAge, "You are a Minor");
        discount = ticketPrice * 0.2;
    } else if(userAge >= 65){
        //console.log(userAge,"You are a Senior Citizen.");
        discount = ticketPrice * 0.4;
    }

    const finalPrice = ticketPrice - discount;
    console.log("Final Price:", finalPrice.toFixed(2), "€");
    }

else{
    alert("Not valid");
}









