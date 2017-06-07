// your code here

class TableRemove {

  connectEventHandlers() {
    //wire up event handler for form submit
    document.getElementById('btn-nuke-first-row')
      .addEventListener(
        'click',
        this.onSubmit.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();

    let table = document.getElementById('table1');
    if (table.rows.length > 0) {
      table.deleteRow(0);
    } 
  }
}

const tableRemove = new TableRemove();
tableRemove.connectEventHandlers();