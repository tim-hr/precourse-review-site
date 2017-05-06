document.getElementById("btn-nuke-first-row").addEventListener('click',function(){
  let tableBody = document.querySelector('.data-table TBODY');
  if(tableBody.rows[0]){
    tableBody.rows[0].remove();
  }
});