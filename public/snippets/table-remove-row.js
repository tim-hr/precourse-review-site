function deleteFirstRow() {
  const tableBody = document.getElementsByTagName('tbody')[0];
  const firstTableRow = tableBody.getElementsByTagName('tr')[0];
  firstTableRow.parentNode.removeChild(firstTableRow);
}

document.getElementById('btn-nuke-first-row').addEventListener('click', deleteFirstRow);
