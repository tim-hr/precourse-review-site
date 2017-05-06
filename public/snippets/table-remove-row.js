function nukeFirstRow() {
  let tableEl = document.querySelector('table').rows.length;
  if(tableEl > 1) {
    document.querySelector('table').deleteRow(1);
  }
}

document.getElementById('btn-nuke-first-row').addEventListener('click', this.nukeFirstRow.bind(this));
