const prezzoAlKm = 0.21;
const scontoUnder = 0.8; // Sconto del 20%
const scontoOver = 0.6; // Sconto del 40%
const passeggeroA = 10;
const passeggeroB = 70;

if (passeggeroA < 18) {
    console.log( (prezzoAlKm * 100) * scontoUnder );
}   else if (passeggeroA >= 65) {
    console.log( (prezzoAlKm * 100 ) * scontoOver );
}   else {
    console.log ( (prezzoAlKm * 100 ) )
}

if (passeggeroB < 18) {
    console.log((prezzoAlKm * 100) * scontoUnder );
}   else if (passeggeroB >= 65) {
    console.log( (prezzoAlKm * 100 ) * scontoOver );
}   else {
    console.log ( (prezzoAlKm * 100 ) )
}


const anniViaggiatore = (Math.floor(Math.random() *100) + 1 ); 
console.log (anniViaggiatore); // randomiser età viaggiatore

// if (anniViaggiatore < 18) {
//     console.log( (anniViaggiatore * scontoUnder) * (prezzoAlKm * 100) );
// }   else if (anniViaggiatore >= 65) {
//     console.log( (anniViaggiatore * scontoOver) * (prezzoAlKm * 100 ) );
// }   else {
//     console.log ( (prezzoAlKm * 100 ) )
// }
