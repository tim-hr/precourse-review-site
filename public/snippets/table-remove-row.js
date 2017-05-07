document.getElementById('btn-nuke-first-row').addEventListener('click', function() {
  const table = document.querySelector('TABLE');
  table.deleteRow(1);
});
