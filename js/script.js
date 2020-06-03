//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

// i = indice
// nell if va sempre messo il ==

//var parolaUtente = prompt("Inserisci una parola");
//console.log(parolaUtente);


function parolaPalindroma(){
   var parola = prompt("Inserisci una parola, e valuterò se è palindroma");
   var verifica = parola.split('').reverse().join('');
   
//Creo ciclo if e else
   if (parola == verifica) {
    alert( parola + " è una parola palindroma");
   }else{
     alert( parola + " non è una parola palindroma");
   }
 };
 parolaPalindroma();

 //split= è possibile suddividere una stringa, sulla base di un dato separatore in essa presente, al fine di ottenre un array di valori.
 //reverse= inverte un array, il primo elemento diventa il l'ultimo e viceversa
 //join= unisce gli elementi array in una scringa che viene restituita
