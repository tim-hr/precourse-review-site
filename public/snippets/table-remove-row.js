const firstBtn = document.getElementById('btn-nuke-first-row');

firstBtn.addEventListener('click', function() {
  rowHeader = document.querySelector('TBODY TR TH').textContent = '';
  rowData = document.querySelectorAll('TBODY TR TD')

  for (let i = 0; i < 3; i++){
    rowData[i].textContent = ''
  };
}, false);

