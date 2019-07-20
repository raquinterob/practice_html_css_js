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
    return ["Pepe",{propA:function fResultado() {return "lo hice!!!"}},30]
}
console.log(fGlobal()[1].propA());

