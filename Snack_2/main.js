/* Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.
🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!". */

// Funzione base: lanciaDado
const lanciaDado = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const incastro = Math.random() < 0.2; // 20% di probabilità
            if (incastro) {
                reject('Il dado si è incastrato!');
            } else {
                const numero = Math.floor(Math.random() * 6) + 1;
                resolve(numero);
            }
        }, 3000);
    });
};

// Bonus: HOF con closure
const creaLanciaDado = () => {
    let ultimoRisultato = null;
    return () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const incastro = Math.random() < 0.2;
                if (incastro) {
                    reject('Il dado si è incastrato!');
                } else {
                    const numero = Math.floor(Math.random() * 6) + 1;
                    if (numero === ultimoRisultato) {
                        console.log('Incredibile!');
                    }
                    ultimoRisultato = numero;
                    resolve(numero);
                    // Stampa l'ultimo risultato
                    console.log('Ultimo risultato:', ultimoRisultato);
                }
            }, 3000);
        });
    };
};

lanciaDado()
    .then(num => console.log('Risultato:', num))
    .catch(err => console.error(err));

const lancio = creaLanciaDado();
lancio().then(console.log).catch(console.error);
lancio().then(console.log).catch(console.error);

