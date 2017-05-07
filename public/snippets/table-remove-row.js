const removeChildren = function(parentEl) {
    while (parentEl.firstChild) {
      parentEl.removeChild(parentEl.firstChild);
  }
};

var i = 0;

class ViewManager {

  connectEventHandlers() {
    document.getElementById("btn-nuke-first-row")
            .addEventListener('click', this.onClick);
  } 

  onClick(event) {
    removeChildren(document.querySelectorAll('TR')[i]);
    i++;
  }
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();