// your code here
const getFirstTableRow = function() {
  return document.querySelectorAll('TBODY TR')[0];
}
const nukeFirstRow = function() {
  const table = document.querySelector('TBODY')
  const firstRow = getFirstTableRow();
  table.removeChild(firstRow);
}
document.getElementById('btn-nuke-first-row').addEventListener('click', 
  nukeFirstRow);