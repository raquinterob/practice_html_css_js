// WHILE
console.log("While");

let cont= 0;
//debugger;
while(cont<=5){
    console.log(cont);
    cont +=1;
}

// For
console.log("For");

for(let cont2=0; cont2 <=5; cont2 +=1){
    console.log(cont2);
}

// Ejercicio 1
console.log("Ejercicio 1");

const fn1 = function (numero){
    if (typeof numero !== "number") {
        console.log("Ingresa un número correcto y diferente a 0")
    } else if (numero === 0){
        console.log("Ingresa un número diferente a 0")
    } else {
    console.log("Tu número es "+numero)
    for(let multiX=1; multiX <=10; multiX +=1){
        console.log(numero +" x "+multiX+" = "+multiX*numero);
    }
    }
}

// Ejercicio 2
console.log(`Ejercicio 2`);

const fn2 = function (numero){
    if (typeof numero !== "number") {
        console.log("Ingresa un número correcto y diferente a 0");
    } else if (numero === 0){
        console.log("Ingresa un número diferente a 0");
    } else {
    console.log("Tu número es "+numero+"\n");
    for(let multiX=1; multiX <=numero; multiX +=1){
        for(let multiX2=1; multiX2 <= 10 ; multiX2 +=1){
           //console.log(multiX +" x "+multiX2+" = "+multiX2*multiX);
           console.log(`${multiX} x ${multiX2} = ${multiX2*multiX}`);
        }
    }
    }
}

// BackTics para concatenar
const name = "Chuwaca";
console.log(`Hola soy ${name||""}!`);


// Ejercicio 3
console.log(`Ejercicio 3`);

const array1 = ["banana","pera","manzana","papaya"];

for(let cont1=0; cont1 < array1.length ; cont1 +=1){
    console.log(`Me gusta la ${array1[cont1]||""}`);
}

// Ejercicio 4 - Array de numeros y que los suma al final
console.log(`Ejercicio 4`);

const array2 = [0,1,2,3,4];
let resultado = 0;
for(let cont1=0; cont1 < array2.length ; cont1 +=1){
    resultado = resultado + array2[cont1]
}
console.log(`El resultado del array1 = [0,1,2,3,4] es ${resultado}`);

// Ejercicio 5 - Recibir un Array de numeros y que los suma al final
console.log(`Ejercicio 5`);

const fn3 = function(numero){
    let resultado2 = 0;

    for (let cont1=0; cont1 < numero.length; cont1 +=1){
        resultado2 = resultado2 + numero[cont1];
    }

    console.log(`La suma de los array es ${resultado2}`);
}

// Ejercicio 6 - Recibir un Array de numeros, que suma los numeros pares que ingresos el usuario
console.log(`Ejercicio 6`);

const isOdd = function(numero){
    return numero % 2;
}

const sumOdd = function(arrayNum){
    let resultado1 = 0;

    for (let cont=0; cont < arrayNum.length; cont +=1){
        // Operador ternario 
        resultado1 = isOdd(arrayNum[cont])? resultado1 : resultado1 + arrayNum[cont];
    }

    console.log(`La suma de los array es ${resultado1}`);
}