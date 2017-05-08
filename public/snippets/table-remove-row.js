
const removeFirstRow = document.querySelector('.table thead');
const button = document.getElementById("btn-nuke-first-row");

button.addEventListener('click', function() {
  for(let i = 0; i < removeFirstRow.length; i++){
    removeFirstRow.deleteRow(i);
  }
  return removeFirstRow;
});