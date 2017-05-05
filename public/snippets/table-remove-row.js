// your code here

function removeFirstRowOfTable (argument) {
	let firstRow = document.querySelector('tbody tr');
	if(firstRow){
		firstRow.remove();
	}	
}
