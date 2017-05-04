const board = {
  '(0,5)': 'X',
  '(1,5)': 'O',
  '(1,4)': 'X'
};
const numCols = 7;
const numRows = 6;

renderBoard();

const placePiece = function(player, col, row) {
  // your code here
  let table = document.querySelector('TBODY');
  let currentRow = table.getElementsByTagName('TR')[row];
  currentRow.getElementsByTagName('TD')[col].innerHTML = player;

};

placePiece('O', 2, 5);
placePiece('X', 0, 4);
placePiece('O', 3, 5);
placePiece('X', 0, 3);
placePiece('O', 4, 5);

// renderBoard(); // note: this function has been provided for you
