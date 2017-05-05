// your code here

function connectEventHandler() {
  document.getElementById("btn-cycle-ponies")
    .addEventListener('click', this.switchSpot.bind(this));
}

function switchSpot() {
  let first = document.getElementsByClassName("my-little-pony")[0];
  let second = document.getElementsByClassName("my-little-pony")[1];

  first.parentNode.insertBefore(second,first);
}

connectEventHandler();