const renderColumnSums = function() {
  // for each col index up the num of cols 
    // fetch all the cell values for that column from the model
    // call filterNonNumericValuesOut() on list of fetched cell values
    // call sumFilteredValues on the returned list from filter function above
    // find the footer element for this column
    // set its text content to the sum returned by sumFilteredValues
};

const filterNonNumericValuesOut = function(values) {
  // filter out the non-numeric values from list of cell values given by 'values'
  // return list of only numeric 'cleanValues'
};

const sumFilteredValues = function(cleanValues) {
  // add up the 'cleanValues'
  // return sum 
};