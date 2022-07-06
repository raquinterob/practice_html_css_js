// ------ Opcion A
// function fnB() {
//     return "Lo hice";
// }
// const objA = {
//     hola:fnB,
// }
// const arrayDe3 = ["Pepe",objA,true];

// function fnA(){
//     return arrayDe3[1];
// }
// console.log(fnA().hola());

// ------ Opcion B
// function fnB() {
//     return "Lo hice";
// }
// const arrayDe3 = ["Pepe",{hola:fnB()},true];

// function fnA(){
//     return arrayDe3[1];
// }
// console.log(fnA().hola);

// ------ Opcion C
function fGlobal() {
    return ["Pepe", { propA: function fResultado() { return "lo hice!!!" } }, 30]
}
console.log(fGlobal()[1].propA());


// ------ Flujo de Control
if (true) {
    console.log("Soy Verdadero")
}
if (false) {
    console.log("Soy Falso") // no se ejecuta
}

const clave1 = "password"
let clave2 = "password"

if (clave1 === clave2) {
    console.log("son iguales ej.===1")
}

clave2 = "password2"

if (clave1 === clave2) {
    console.log("son iguales ej.2")
} else {
    console.log("son diferentes ej.2")
}

// if - else // Ejercicio 1

const email = "nicolasm@nikodermus.media"
const emailConf = "nicolasp@nikodermus.media"

if (email !== emailConf) {
    console.log("Emails diferentes ej.if.1")
} else {
    console.log("Todo bien parcerito ej.if.1")
}

// if - else if - else // Ejercicio 2
if (email === emailConf) {
    console.log("Emails diferentes!! ej.if.2")
} else if (email === "presidente@gmail.com") {
    console.log("Siga mi presi ej.if.2")
} else {
    console.log("Todo bien parcerito ej.if.2")
}

// if - else if - else // Ejercicio 3
if (email === emailConf) {
    console.log("Emails diferentes!! ej.if.3")
} else if (email !== "presidente@gmail.com") {
    console.log("Siga mi presi ej.if.3")
} else {
    console.log("Todo bien parcerito ej.if.3")
}

// if - else if - else // Ejercicio 4
if (3 > 2) {
    console.log("Emails diferentes!! ej.if.4")
} else if (2 <= 5) {
    console.log("Siga mi presi ej.if.4")
} else if (2 >= 5) {
    console.log("Tonces ej.if.4")
} else {
    console.log("Todo bien parcerito ej.if.4")
}

const email1 = "delarosa@melo.com"
const emailConf1 = "delarosa@melo.com"


//Operadores logicos && "y" // || "o"
if (email1 === emailConf1) {
    if (email1 >= 15) {
        console.log("yeah!");
    }
}

if (email1 === emailConf1 && email1 >= 15) {
    console.log("yeah!");
}

//esta es la mejor práctica parar crear funciones: dentro de una variable
const fnTest = function (number) {
    return number;
};

//funcion con varios parametros y devuelve solo el segundo
const fnTest1 = function (number, prueba, ocho) {
    return prueba[1];
};

const fnTest2 = function (number) {
    return number + 2;
};

const fnTest3 = function (number, number2) {
    return number + number2;
};

const fnTest4 = function (nombre) {
    return "Hola " + nombre;
};

const fnTest5 = function (number) {
    if (number === 5) {
        console.log("Es igual 5")
    } else if (number > 5) {
        console.log("Es mayor que 5")
    } else {
        console.log("Es menor que 5")
    }
}

const fnTest6 = function (number) {
    if (number % 2 === 0) {
        console.log("Es par")
    } else {
        console.log("Es impar")
    }
}

const fnTest7 = function (number) {
    if (typeof number === "number") {
        if (number % 2 === 0) {
            console.log("Es par")
        } else {
            console.log("Es impar")
        }
    } else {
        console.log("No es un número")
    }
}

const fnTest8 = function (number) {
    if (typeof number === "number") {
        if (number % 2 === 0) {
            console.log("Es par")
        } else {
            console.log("Es impar")
        }
    } else {
        console.log("No es un número")
    }
}

// funcion que le pasen nombre y numero y devuelve "Querido" + nombre + ", " + numerox3 es multiplo de 4.
const fnTest9 = function(nombre,numero){
    if (typeof nombre !== "string") {
        console.log("Ingresa un Nombre correcto")
    } else if (typeof numero !== "number"){
        console.log("Ingresa un valor de número correcto")
    } else if ((numero*3)%4 === 0){
        console.log("Querido "+nombre+", "+numero+"x3 es multiplo de 4.")
    } else {
    console.log("Querido "+nombre+", "+numero+"x3 no es multiplo de 4.")
    }
}