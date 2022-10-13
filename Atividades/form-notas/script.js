var selectedRow = null;

//manipulando o evento de submit do form
function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
  var formData = {};
  formData["nome"] = document.getElementById("nome").value;
  formData["bimestreUm"] = parseFloat(
    document.getElementById("bimestreUm").value
  );
  formData["bimestreDois"] = parseFloat(
    document.getElementById("bimestreDois").value
  );
  return formData;
}

//criar uma nova linha na tabela
function insertNewRecord(data) {

  var table = document
    .getElementById("listaNotas")
    .getElementsByTagName("tbody")[0];
  var sum, avg;
  var newRow = table.insertRow(table.length);

  sum = data.bimestreUm + data.bimestreDois;
  avg = sum / 2;

  cell1 = newRow.insertCell(0); //nome
  cell2 = newRow.insertCell(1); //bimestreUm
  cell3 = newRow.insertCell(2); //bimestreDois
  cell4 = newRow.insertCell(3); //media
  cell5 = newRow.insertCell(4); //situação
  cell6 = newRow.insertCell(5); //botao

  cell1.innerHTML = data.nome;
  cell2.innerHTML = data.bimestreUm;
  cell3.innerHTML = data.bimestreDois;
  cell4.innerHTML = avg;

  if (avg >= 7) {
    cell5.innerHTML = "<font color=green>Aprovado</font>";
  } else {
    cell5.innerHTML = "<font color=red>Reprovado</font>";
  }

  cell6.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Apagar</a>`;
}

//limpar o form
function resetForm() {
  document.getElementById("nome").value = "";
  document.getElementById("bimestreUm").value = "";
  document.getElementById("bimestreDois").value = "";
  selectedRow = null;
}

//manipula a edição de uma linha ja existente
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("nome").value = selectedRow.cells[0].innerHTML;
  document.getElementById("bimestreUm").value = selectedRow.cells[1].innerHTML;
  document.getElementById("bimestreDois").value =
    selectedRow.cells[2].innerHTML;
}

//atualiza a linha selecionada com os dados do form editado
function updateRecord(formData) {
  sum = formData.bimestreUm + formData.bimestreDois;
  avg = sum / 2;

  selectedRow.cells[0].innerHTML = formData.nome;
  selectedRow.cells[1].innerHTML = formData.bimestreUm;
  selectedRow.cells[2].innerHTML = formData.bimestreDois;
  selectedRow.cells[3].innerHTML = avg;

  if (avg >= 7) {
    cell5.innerHTML = "<font color=green>Aprovado</font>";
  } else {
    cell5.innerHTML = "<font color=red>Reprovado</font>";
  }
}

//exclui uma linha da tabela de notas
function onDelete(td) {
  if (confirm("Tem certeza de que deseja apagar esta nota?")) {
    row = td.parentElement.parentElement;
    document.getElementById("listaNotas").deleteRow(row.rowIndex);
    resetForm();
  }
}

//valida campo nome para nao ser vazio
function validate() {
  isValid = true;
  if (document.getElementById("nome").value == "") {
    isValid = false;
    document.getElementById("ValidaNome").classList.remove("hide");
  } else {
    isValid = true;
    if (!document.getElementById("ValidaNome").classList.contains("hide"))
      document.getElementById("ValidaNome").classList.add("hide");
  }
  return isValid;
}
