document.getElementById('btn-nuke-first-row').addEventListener('click', function(e) {
  let firstRow = document.querySelector('tbody tr');
  firstRow.parentNode.removeChild(firstRow);
});
