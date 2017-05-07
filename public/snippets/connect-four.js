const board = {
  '(0,5)': 'X',
  '(1,5)': 'O',
  '(1,4)': 'X'
};
const numCols = 7;
const numRows = 6;

const isInRange = ((col, row) =>
                   ((col >= 0) && (col < numCols) &&
                    (row >= 0) && (row < numRows)));
const placePiece = function(player, col, row) {
  if (isInRange(col, row)) {
    board[`(${col},${row})`] = player;
  }
};

placePiece('O', 2, 5);
placePiece('X', 0, 4);
placePiece('O', 3, 5);
placePiece('X', 0, 3);
placePiece('O', 4, 5);

renderBoard(); // note: this function has been provided for you
