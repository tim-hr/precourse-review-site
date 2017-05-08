// your code here
class ViewManager {

  connectEventHandlers(){
    document.getElementById('btn-nuke-first-row')
      .addEventListener(
        'click',
        this.onClick.bind(this))
  }

  onClick(event){
    const table = document.querySelector('.data-table').getElementsByTagName("TBODY");
    table[0].removeChild(table[0].childNodes[0]);
    table[0].removeChild(table[0].childNodes[0]);
  }
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();