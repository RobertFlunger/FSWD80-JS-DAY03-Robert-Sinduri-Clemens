var arrayNew = new Array();

arrayNew.length = Number(prompt("Enter the length of the array"));

for (var i=0; i<arrayNew.length; i++) {
	arrayNew[i] = Number(prompt("Enter array values"));

}
console.log(arrayNew);
// console.log(arrayNew.sort());

function sortArray() {
	
	for (var j=0; j<arrayNew.length; j++) {
		for (var k=0; k<arrayNew.length; k++) {
			if (arrayNew[k] > arrayNew[k+1]) {
				var a = arrayNew[k+1];
				var b = arrayNew[k];
				arrayNew[k] = a;
				arrayNew[k+1] = b;
				// console.log(arrayNew);
			}
		}
	
	}
	return(arrayNew);
}

document.write(sortArray());
console.log(sortArray());



	