const tableBody = document.querySelector("tbody");
let topRow = document.querySelectorAll("tbody tr");

const removeTopRow = function() {
  if (topRow.length === 0) {
    alert('No more data rows, bro!');
  } else {
    tableBody.removeChild(topRow[0]);
    topRow = document.querySelectorAll("tbody tr");
  }
}

document.getElementById("btn-nuke-first-row")
  .addEventListener("click", removeTopRow);