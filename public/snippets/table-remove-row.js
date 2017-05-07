
let nukeRowBtn = document.getElementById("btn-nuke-first-row");
nukeRowBtn.onclick = function(){
  const tableRowEl = document.querySelectorAll('tr')[1];
   tableRowEl.parentNode.removeChild(tableRowEl);
   nukeRowBtn.blur();
};



  


