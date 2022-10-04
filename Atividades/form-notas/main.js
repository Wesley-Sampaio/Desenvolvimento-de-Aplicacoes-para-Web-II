function Sub() {
  var n, k, r, e, v, sum, avg;
  n = document.getElementById("nome").value;
  k = parseFloat(document.getElementById("bimestre1").value);
  r = parseFloat(document.getElementById("bimestre2").value);

  // calcula a média
  sum = k + r;
  avg = sum / 2;

  // Gera lista de notas
  var newTable = document.getElementById("TableScore");
  var row = newTable.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(0);
  var cell3 = row.insertCell(0);
  var cell4 = row.insertCell(0);

  cell4.innerHTML = n;
  cell3.innerHTML = sum;
  cell2.innerHTML = avg;

  //mostra a situação
  if (avg >= 7) {
    cell1.innerHTML = "<font color=green>Aprovado</font>";
  } else {
    cell1.innerHTML = "<font color=red>Reprovado</font>";
  }
}
