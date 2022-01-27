// 1. Дана строка 'ddd@bbb@ccc'. Замените все @ на '!'

let symbols = 'ddd@bbb@ccc';
let b = symbols.replaceAll("@", '!');
console.log(b);