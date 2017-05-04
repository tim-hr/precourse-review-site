let nuke = function () {
  let row = document.querySelector('TBODY TR');
  row.remove(); 
}

let button = document.getElementById('btn-nuke-first-row');
button.onclick = nuke;

