

let button = document.getElementById('calculate');

button.addEventListener('click' , function() {
    let km = parseInt( document.getElementById('km').value);
    let age = parseInt( document.getElementById('age').value);
    let price = km * 0.21;
    let message = '';
    
    if( age === 0){
        console.log(price);
        message += `il prezzo del biglietto e di : ${price}$`
    }
    else if( age === 1){
        price *= 0.8;
        message += `il prezzo del biglietto e scontaot del 20% di : ${price}$`
    }
    else{
        price *= 0.6;
        message += `il prezzo del biglietto e scontato del 40% di : ${price}$`

    }
    document.getElementById('price').innerText = message;
});