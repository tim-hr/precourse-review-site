var table = document.getElementsByClassName("data-table")[0].childNodes[3].children;
var btn = document.getElementById("btn-nuke-first-row");

btn.onclick = function() {
  table[0].parentNode.removeChild(table[0]);
}