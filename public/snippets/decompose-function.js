const renderColumnSums = function() {
  // for each col index up to the num of cols
  //    call getColumnCellValues() to fetch an array of all cell values for that column
  //    filter our the non-numeric values from the array (using array.filter)
  //    reduce the filtered values in the array into a sum (using array.reduce)
  //    set the footer cell to the newly calculated sum for that column (using setCellContent())
};

const getColumnCellValues = function(col) {
  // create an array to store all cell values for column
  // for each row in the model
  //    get the value of the cell at the current row and passed in col
  //    push the value onto the array

  // return the array;
};

const getFooterElement = function(col) {
  // using querySelector get the HTML element for the footer row
  // given the passed in column, get the specific cell for the column
  // return the table cell location at the specific column
};

const setCellContent = function(row,col, content) {
  // if the row is equal to the final row then we need to get the footer element
  //    get the footer table cell (using getFooterElement())
  //    set the table cell to the content passed in 
};