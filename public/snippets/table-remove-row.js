class RemoveRow {
  connectEventHandlers() {
    document.getElementById('btn-nuke-first-row') 
      .addEventListener(
        'click',
        this.nuke.bind(this));
  }

  nuke(event) {
    event.preventDefault();
    let el = document.querySelector('table');
    el.deleteRow(1);
  }
}

const removeRow = new RemoveRow();
removeRow.connectEventHandlers();