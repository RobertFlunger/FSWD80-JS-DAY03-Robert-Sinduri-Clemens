
// function sortTemperature() {
// 	var temp = Math.floor(Math.random() * (25 - (-5) + 1) + (-5));
// 	console.log(temp);
// 	if (temp>=-5 && temp<=10) {
// 		document.write("The Temperature is " + temp + " and The weather is cold");
// 	} else {
// 		document.write("The Temperature is " + temp + " and The weather is moderate")
// 	}

// }




//Basic 02
// var arrayNew = new Array();

// arrayNew.length = parseInt (prompt("Enter the length of the array"));

// for (var i=0; i<arrayNew.length; i++) {
// 	arrayNew[i] = parseInt (prompt("Enter array values"));

// }

// console.log(arrayNew);

// function maxArray(arr) {
// 	var max = arr[0];
// 	for (j=0; j <arr.length; j++) {
// 		if (max < arr[j]) {
// 			max = arr[j];
// 		}
// 	}
// 	return max;
// }

// document.write("<br>" + arrayNew + "<br>");
	
// document.write("The maximum value of the array is " + maxArray(arrayNew) + "<br>");

// //Basic 03

// function productArray(arr1) {
// 	var product = 1;
// 	for (k=0; k<arr1.length; k++) {
// 		product = product * arr1[k];
// 	}
// 	return product;
// }

// document.write("The product of the values of the array is " + productArray(arrayNew) + "<br>");

// //Basic 04

 function sortTemperature2() {
 	var temp = Math.floor(Math.random() * (50 - (-20) + 1) + (-20));
 	console.log(temp);

	element = document.getElementById('weather');
	console.log(temp);
	if (temp>=-20 && temp<=10) {
		document.getElementById("result").innerHTML ="The Temperature is " + temp + " and The weather is cold";
		element.src="imgs/cold.png";
	} else if (temp>10 && temp<=25) {
		document.getElementById("result").innerHTML ="The Temperature is " + temp + " and The weather is moderate";
		element.src="imgs/moderate.jpg";
	} else if (temp>25 && temp<=35) {
		document.getElementById("result").innerHTML ="The Temperature is " + temp + " and The weather is hot";
		element.src="imgs/hot.jpg";
	} else if (temp>35 && temp<=50) {
		document.getElementById("result").innerHTML ="The Temperature is " + temp + " and The weather is too hot. Go home or have a beer";
		element.src="imgs/toohot.jpg";
	}

}
