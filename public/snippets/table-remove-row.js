class ViewManager {
  connectEventHandlers() {
    document.getElementById('btn-nuke-first-row')
    .addEventListener('click', this.removeFirstRow.bind(this));
  }

  removeFirstRow(evt) {
    document.querySelector('TBODY TR').remove();
  }
}

const viewManager = new ViewManager();

viewManager.connectEventHandlers();