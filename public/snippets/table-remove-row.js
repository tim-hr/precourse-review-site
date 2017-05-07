
function nukeFirstDataRow(){

  let trs = document.getElementsByTagName('tr');
  let cells = trs[1].childNodes;
  for (let i=0; i<cells.length; i++) {
    if (cells[i].tagName !== 'TH') {
      cells[i].innerHTML = "";
    }
  }
}

document.getElementById('btn-nuke-first-row').addEventListener('click', this.nukeFirstDataRow.bind(this));
