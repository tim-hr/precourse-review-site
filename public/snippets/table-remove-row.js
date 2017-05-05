class RemoveTopData {
  
  topDate() {
    document.querySelector("TBODY").deleteRow(0);
  }
  
  addEventListener() {
    const button = document.getElementById('btn-nuke-first-row'); 
    button.addEventListener('click', this.topDate.bind(this));
  }
}


const removeTopData = new RemoveTopData(); 
removeTopData.addEventListener();