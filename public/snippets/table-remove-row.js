// your code here
const handleNukeButtonPress = function () {
  const tableBodyEl = document.querySelector('TABLE TBODY');
  tableBodyEl.removeChild(tableBodyEl.firstChild);
  tableBodyEl.removeChild(tableBodyEl.firstChild);
}

const nukeButton = document.getElementById('btn-nuke-first-row');
nukeButton.addEventListener('click', handleNukeButtonPress);