class Table {
  connectEventHandlers() {
    document.getElementById('btn-nuke-first-row')
      .addEventListener('click', this.nukeFirstRow.bind(this))
  }

  nukeFirstRow() {
    let dataTable = document.querySelector('TBODY');
    let firstRow = dataTable.rows[0];
    dataTable.removeChild(firstRow);
  }
}

const table = new Table();
table.connectEventHandlers();