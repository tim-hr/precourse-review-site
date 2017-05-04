class ViewManager {
  
  connectEventHandlers() {
    document.getElementById('btn-nuke-first-row')
      .addEventListener('click',
        this.onClick.bind(this));
  }

  onClick(event) {
    console.log('test');
    event.preventDefault();
    var bodyEl = document.querySelector('TBODY');
    bodyEl.removeChild(bodyEl.firstChild); // remove blank text node
    bodyEl.removeChild(bodyEl.firstChild); // remove actual row node
  }

}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
