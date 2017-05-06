
class TableRemoveRow {

  constructor() {
    this.sheetBodyEl = document.querySelector('TBODY');
    this.nukeButton = document.querySelector('#btn-nuke-first-row');
  }

  attachEventHandlers() {
    this.nukeButton.addEventListener('click', 
    this.nukeRowClick.bind(this));
  }

  nukeRowClick(evt){
    //console.log("the nuke button was clicked");
    this.removeChildren(this.sheetBodyEl.rows[0]);

  }
  
  removeChildren(parentEl) {
    while(parentEl.firstChild) {
      parentEl.removeChild(parentEl.firstChild);
    }
  }
}

const table = new TableRemoveRow();
table.attachEventHandlers();

