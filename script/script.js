const prezzoAlKm = 0.21;
const scontoUnder = 0.8; // Sconto del 20%
const scontoOver = 0.6; // Sconto del 40%
const passeggeroA = 10;
const passeggeroB = 70;

console.log ('Passeggero A minorenne');
if (passeggeroA < 18) {
    console.log( (prezzoAlKm * 100) * scontoUnder );
}   else if (passeggeroA >= 65) {
    console.log( (prezzoAlKm * 100 ) * scontoOver );
}   else {
    console.log ( (prezzoAlKm * 100 ) )
}

console.log ('Passeggero B over 65');
if (passeggeroB < 18) {
    console.log( (prezzoAlKm * 100) * scontoUnder );
}   else if (passeggeroB >= 65) {
    console.log( (prezzoAlKm * 100 ) * scontoOver );
}   else {
    console.log ( (prezzoAlKm * 100 ) )
}


console.log ('Randomiser di età');
const anniViaggiatore = (Math.floor(Math.random() * 100) + 1 ); 
console.log (anniViaggiatore); // randomiser età viaggiatore

if (anniViaggiatore < 18) {
    console.log( (prezzoAlKm * 100) * scontoUnder );
}   else if (anniViaggiatore >= 65) {
    console.log( (prezzoAlKm * 100 ) * scontoOver );
}   else {
    console.log ( (prezzoAlKm * 100 ) )
}


console.log ('Randomiser di età e km');
console.log (anniViaggiatore); // randomiser età viaggiatore
const percorrenza = (Math.floor(Math.random() * 1000) + 1 ); 
console.log (percorrenza); // randomiser km

if (anniViaggiatore < 18) {
    let totaleRandom = ( (prezzoAlKm * percorrenza) * scontoUnder );
    console.log(`€${totaleRandom.toFixed(2)}`);
}   else if  (anniViaggiatore >= 65) {
    let totaleRandom = ( (prezzoAlKm * percorrenza) * scontoOver );
    console.log(`€${totaleRandom.toFixed(2)}`);
}   else {
    let totaleRandom = ( (prezzoAlKm * percorrenza ) )
    console.log(`€${totaleRandom.toFixed(2)}`);
}