let removeRow = function (){
  document.querySelector("tbody tr").remove()
}

let removeRowButton = document.getElementById("btn-nuke-first-row")
removeRowButton.onclick = removeRow;
