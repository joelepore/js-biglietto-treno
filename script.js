const pricePerKm = 0.21;
const discountUnderage = 20;
const discountOver65 = 40;

let totalPrice, totalDiscountedPrice, discountPrice;
let discount = 0;

const totKm = parseInt(prompt('Inserisci i km da percorrere'));
const age = parseInt(prompt('Inserisci la tua eta\''));

console.log('Km da percorrere:', totKm);
console.log("Eta':", age);

totalPrice = totKm * pricePerKm;
console.log("Prezzo pieno: €", totalPrice.toFixed(2));

if (age < 18) {
  discount = discountUnderage;
} else if (age > 65) {
  discount = discountOver65;
}

discountPrice = totalPrice * discount / 100;
console.log(`Hai diritto a uno sconto del ${discount}% pari a € ${discountPrice.toFixed(2)}`);

totalDiscountedPrice = totalPrice - discountPrice;
console.log("Il prezzo scontato del tuo biglietto e' di: €", totalDiscountedPrice.toFixed(2));