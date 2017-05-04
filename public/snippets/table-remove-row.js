const deleteRow = function() {
  const row = document.querySelector('tbody tr');
  row.remove();
}

deleteRowButton = document.getElementById('btn-nuke-first-row');
deleteRowButton.addEventListener('click', deleteRow);
