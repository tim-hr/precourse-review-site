class DeleteButton {
  constructor() {

  }
  init() {
    this.initDomReferences();
    this.attachEventListener();
  }

  initDomReferences() {
    this.sheetBodyEl = document.querySelector('TBODY')
    this.buttonEl = document.querySelector('#btn-nuke-first-row')
  }

  removeRow() {
    event.preventDefault();
    this.sheetBodyEl.deleteRow(0)
  }

  attachEventListener() {
    this.buttonEl.addEventListener('click', this.removeRow.bind(this));
  }
}

const manipulatingTable = new DeleteButton();
manipulatingTable.init();
