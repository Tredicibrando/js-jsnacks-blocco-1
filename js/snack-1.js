// let i = 0;
let somma = 0;

// while ( i < 5 ){
//     i++;
//     const num = parseFloat(prompt('inserisci il tuo numero'));
//     if (!isNaN(num)){
//         somma += num;
//     }
// }

// console.log(somma);




//******FOR */


for (let i = 0; i < 5; i++){
    const num= parseFloat(prompt('inserisci il tuo numero'));
    if(!isNaN(num)){
        somma += num;
    }
}
console.log(somma);

