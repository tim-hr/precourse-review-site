// your code here

var table = document.querySelector('tbody');
var topRow = document.querySelectorAll('tbody tr');

removeTopTableRow = function() {

  table.removeChild(topRow[0]);
  topRow = document.querySelectorAll('tbody tr');
  
}

document.getElementById('btn-nuke-first-row').addEventListener('click', removeTopTableRow);