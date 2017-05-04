const button = document.getElementById('btn-nuke-first-row');
const tableBody = document.querySelector('TBODY');

button.addEventListener('click', clickHandler.bind(this));

function clickHandler(evt) {
  tableBody.removeChild(document.querySelector('TBODY TR'));
}
