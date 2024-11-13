const pricePerKm = 0.21;
const discountUnderage = 20;
const discountOver65 = 40;

let totalPrice;

const totKm = parseInt(prompt('Inserisci i km da percorrere'));
const age = parseInt(prompt('Inserisci la tua eta\''));

console.log('Km da percorrere:', totKm);
console.log("Eta':", age);

totalPrice = totKm * pricePerKm;
console.log("Il prezzo pieno del tuo biglietto e' di: €", totalPrice.toFixed(2));