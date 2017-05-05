document.getElementById("btn-nuke-first-row").addEventListener("click", deleteRow);

function deleteRow() {
  document.querySelector("TBODY").deleteRow(0);
}