let variavel = "Vaca voadora";
console.log(variavel);

variavel = 2022;
console.log(variavel);

let inventario = {
  camisa: 55.0,
  tenis: 89.0,
  meia: 12.0,
};

console.log(inventario);

let nota = 0;

if (nota >= 70) {
  console.log("Aprovado");
}

if (nota >= 70) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado!");
}

if (nota == 100) {
  console.log("Aprovado com nota máxima!");
} else if (nota >= 70) {
  console.log("Aprovado por media!");
} else {
  console.log("Reprovado!");
}

if (nota > 0) {
  if (nota >= 10 && nota <= 60) {
    console.log("Reprovado!");
  } else if (nota >= 70 && nota <= 90) {
    console.log("Aprovado por media!!");
  } else if (nota == 100) {
    console.log("Aprovado com nota máxima!");
  }
}

//let nota = 50;

switch (nota) {
  case 100:
    console.log("Aprovado com nota máxima!");
    break;
  case 90:
  case 80:
  case 70:
    console.log("Aprovado por media!");
    break;
  case 60:
  case 50:
  case 40:
  case 30:
  case 20:
  case 10:
    console.log("Reprovado!");
    break;
  default:
    console.log("Nota inválida!");
}

//while
let numero = 9;

while (numero <= 10) {
  console.log(numero);
  numero += 1;
}

do {
  console.log(numero);
  numero += 1;
} while (numero <= 5);

//for
const compras = ["camisa", "tenis", "meia", "calça", "bermuda"];

for (let i in compras) {
  i = compras[i];
  console.log(i);
}

for (let i = 0; i < compras.length; i++) {
  console.log(compras[i]);
}

for (let i = 0; i < compras.length; i++) {
  console.log(i);
}

const funcionario = {
  nome: "João",
  idade: 25,
  cargo: "Programador",
};

for (func in funcionario) {
  console.log(func, funcionario[func]);
}

//functions

function minhaFuncao() {} //sintaxe basica
const minhaFuncao1 = function () {}; //atribuiição de função a uma variavel

function soma(n1, n2) {
  return n1 + n2;
}

let total = soma(11, 22);
console.log(total);

function soma(n1, n2) {
  return n1 + n2;
}
/*
let total = soma(11, 22);
console.log(total);
console.log(total + 10);
*/

//atenção a ordem dos parametros em justaposição
function soma(n1, n2) {
  let total = n1 + n2;
  return total;
}
console.log(soma(2, 5));

//funçao com parametros indefinidos
function minhaFuncao2() {
  let args = 0;
  for (i in arguments) {
    args += arguments[i];
  }
  return args;
}

console.log(minhaFuncao2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
