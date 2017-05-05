/*const removeTableRow = function() {
  headers = document.querySelector('TBODY TR');
  for (let i = 0; i < headers.length; i++){
    headers[i].textContent = ''
  };
};
*/
const firstBtn = document.getElementById('btn-nuke-first-row');

firstBtn.addEventListener('click', function() {
  rows = document.querySelector('TBODY TR');
  for (let i = 0; i < rows.length; i++) {
    rows[i].textContent = ''
  };
}, false);

