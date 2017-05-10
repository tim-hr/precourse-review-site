
const btn = document.getElementById('btn-nuke-first-row');
btn.addEventListener('click', function(){
  const t= document.querySelectorAll(".data-table");
 t[0].deleteRow(1);

});
