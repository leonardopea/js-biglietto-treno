

let anni = parseInt (prompt ('Inserisci età del soggetto'));
console.log(anni);



let km = parseInt (prompt ('Inserisci numero di Km da percorrere'));
console.log(km);

// FISSO I  CALCOLI DEI PREZZI//

let prezzo_intero = km * 0.21;

let prezzo_scontato_junior = prezzo_intero * 80 / 100 ;


let prezzo_scontato_senior = prezzo_intero * 60 / 100;



if (anni > 100 || anni < 1) {
    alert(" Attenzione: il soggetto deve avere un'età compresa tra 1 e 100 anni per viaggiare con noi");

    } else if (isNaN('anni') && isNaN('km')) {
        alert("Attenzione: non sono stati inseriti dei numeri");

        }else if (anni < 18) {
                
            document.getElementById('prezzo_finale').innerHTML = ` Il tuo biglietto costa: ${prezzo_scontato_junior.toFixed(2)} €`; 
        
            } else if (anni > 65) {
        
                document.getElementById('prezzo_finale').innerHTML = `Il tuo biglietto costa: ${prezzo_scontato_senior.toFixed(2)} €`;
                } else{
        
                    document.getElementById('prezzo_finale').innerHTML = `Il tuo biglietto costa: ${prezzo_intero.toFixed(2)} €`;
                }
            
        
        






    
