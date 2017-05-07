class TableView {
  attachEventHandlers() {
    document.querySelector('#btn-nuke-first-row').addEventListener('click', this.onClickNukeFirstRow);
  }

  onClickNukeFirstRow(event) {
    const tBody = document.querySelector('.data-table TBODY TR');
    if(tBody.hasChildNodes()) {
      tBody.remove(tBody.firstChild);
    }
  }
}

const view = new TableView();
view.attachEventHandlers();