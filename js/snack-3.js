const nums = [];

for (let i = 0; i < 6; i++){
    const num = parseFloat(prompt('inserisci il tuo numero'));
    if ( num % 2 === 1){
        nums.push(num);
    }
}

console.log(nums);