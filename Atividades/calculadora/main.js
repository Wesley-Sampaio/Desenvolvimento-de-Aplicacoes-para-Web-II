// Troca por uma string vazia.
function clean() {
  document.getElementById("resultado").innerHTML = "";
}

//junção de duas ou mais strings em uma unica string
function insert(num) {
  var numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + num;
}

//representam os índices inicial e final
//extrair os últimos caracteres de uma string específica
//não precisa saber os índices inicial ou final
function back() {
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

//Computa um código JavaScript representado como uma string
function calcular() {
  var resultado = document.getElementById("resultado").innerHTML;
  if (resultado) {
    document.getElementById("resultado").innerHTML = eval(resultado);
  }
}
