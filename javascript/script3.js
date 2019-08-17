// Ejercicio 1
console.log("Ejercicio 1 - Palindromo - fnpalindromo");

const fnpalindromo = function(palindromo){
    let palindromoBack = "";
    palindromo = String(palindromo);
    palindromo = palindromo.toLowerCase();
    // debugger;
    for (let i=(palindromo.length)-1; i > -1; i -=1){
        palindromoBack = palindromoBack + palindromo[i];
    }
    return palindromo.includes(palindromoBack);
}

// Ejercicio 2
console.log("Ejercicio 2 - Palindromo2 - fnpalindromo2");

const fnpalindromo2 = function(palindromo){
    let palindromoBack = "";
    // debugger;
    palindromo = String(palindromo);
    palindromo = palindromo.toLowerCase();

    palindromoBack = palindromo.split("");
    palindromoBack = palindromoBack.reverse();
    palindromoBack = palindromoBack.join("");

    return palindromo.includes(palindromoBack);
}

// Ejercicio 3
console.log("Ejercicio 3 - Palindromo3 - fnpalindromo3 - Golfing");

const fnpalindromo3 = (palindromo) => {
    // debugger;
    palindromo = String(palindromo).toLowerCase().split(" ").join("");
    palindromoBack = palindromo.split("").reverse().join("");
    return palindromo.includes(palindromoBack);
}

// const fnHola = (entrada) => { //pasos } // y de una retorna el valor