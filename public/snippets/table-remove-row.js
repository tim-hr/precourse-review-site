document.getElementById("btn-nuke-first-row").addEventListener("click", removeRow);

function removeRow(){
  const parent = document.querySelector('tbody');
  const child = document.querySelector('tbody tr');
  parent.removeChild(child);
}
