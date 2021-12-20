//inserisci nome

const nome = prompt('Inserisci il tuo nome');
console.log(nome);

//inserisci cognome

const cognome = prompt('Inserisci il tuo cognome');
console.log(cognome)

//colore preferito

const colorePreferito = prompt('Inserisci il tuo colore preferito');
console.log(colorePreferito)

//stampa l'elemento nella pagina
document.getElementById('password').innerHTML = 'La tua password è :' + nome + cognome + colorePreferito + '21'