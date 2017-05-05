// your code here

function connectEventHandler() {
  document.getElementById("btn-nuke-first-row")
    .addEventListener('click', this.onClick.bind(this));
}

function onClick() {
  event.preventDefault();
  let row = document.querySelectorAll("TBODY TR")[0];
  row.parentNode.removeChild(row);
}

connectEventHandler();