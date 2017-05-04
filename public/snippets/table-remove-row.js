const removeRowButton = document.getElementById('btn-nuke-first-row');
const tableBody = document.querySelector('TBODY');

removeRowButton.addEventListener('click', clickHandler.bind(this));

function clickHandler(evt) {
  tableBody.removeChild(document.querySelector('TBODY TR'));
}
