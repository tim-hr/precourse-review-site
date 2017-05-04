const board = {
  '(0,5)': 'X',
  '(1,5)': 'O',
  '(1,4)': 'X',
  '(2,5)': 'O',
  '(0,4)': 'X',
  '(3,5)': 'O',
  '(0,3)': 'X',
  '(4,5)': 'O'
};
const numCols = 7;
const numRows = 6;

const placePiece = function(player, col, row) {
  // your code here
  for (var key in board) {
    if ([col][row] === undefined) {
      key = '(col,row)';
      board[key] = 'player'; 
    }
  }
};

placePiece('O', 2, 5);
placePiece('X', 0, 4);
placePiece('O', 3, 5);
placePiece('X', 0, 3);
placePiece('O', 4, 5);

renderBoard(); // note: this function has been provided for you
