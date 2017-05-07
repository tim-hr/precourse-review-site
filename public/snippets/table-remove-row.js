const nukeFirstRow = function(event) {
  var x = document.querySelector('table').rows.length;
  if (x > 1) {
    document.querySelector('table').deleteRow(1);
  }
}
