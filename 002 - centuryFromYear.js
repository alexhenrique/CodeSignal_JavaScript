// function centuryFromYear(year) {
//     var saida;
//     var resultado = year / 100;
//     saida = Math.ceil(resultado);
//         return saida;
// }

centuryFromYear = year => Math.ceil(year / 100);

console.log(centuryFromYear(2322));