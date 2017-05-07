// your code here

class ViewManager {

  connectEventHandlers() {
    document.getElementById('btn-nuke-first-row')
      .addEventListener(
        'click',
        this.onClickNukeFirstRow);
  }

  onClickNukeFirstRow(event) {
    const tableBodyEl = document.querySelector('TBODY');
    if (tableBodyEl.firstElementChild) {
      tableBodyEl.removeChild(tableBodyEl.firstElementChild);
    }
  }

}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();

