const invitatiFesta = ['Pippo Baudo','Il mago Otelma', 'Michelle Hunziker','Amadeus' ];

const uName = prompt('inserisci nome e cognome').trim();

let trovato = false;

for ( let i= 0; i<invitatiFesta.length; i++){
    const nome = invitatiFesta[i];

    if(uName.toLowerCase() === nome.toLowerCase()){
        trovato = true;
    }
}

if (trovato){
    console.log('accomodati pure')
} else {
    console.log('mi dispiace se ne vada')
}