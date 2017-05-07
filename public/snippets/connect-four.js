const board = {
  '(0,5)': 'X',
  '(1,5)': 'O',
  '(1,4)': 'X',
};
const numCols = 7;
const numRows = 6;

const placePiece = function(player, col, row) {
  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row < numRows; row++) {
      const position = '(col, row)';
    }
  }    
   board.position = player;

   // this is as far as I can get, I couldn't figure out how to make it work.
};

placePiece('O', 2, 5);
placePiece('X', 0, 4);
placePiece('O', 3, 5);
placePiece('X', 0, 3);
placePiece('O', 4, 5);

renderBoard(); // note: this function has been provided for you
