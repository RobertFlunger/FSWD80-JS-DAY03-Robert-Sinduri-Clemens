/*Basic Exercise 1 - Weather*/

function celsius(min, max) {
	mini = Math.ceil(min);
	maxi = Math.floor(max);
	temp = Math.floor(Math.random() * (maxi - mini +1)) + mini;
	return(temp);
}

console.log(celsius(-5, 25));

function temperature() {
	degree = celsius(-5, 25);
	document.write("At the moment it is " + degree + "°C." + "<br>");
	if (degree <= 10) {
		document.write("The weather is cold.")
	} else {
		document.write("The weather is moderate.")
	}
}

/*Basic Exercise 2 */

function maxNumber(array) {
	console.log(array)
	var max = array[0];
	for (i=1; i < array.length;i++){
		if (max < array[i]) {
			max = array[i];
			}
		} 
	return(max)	
}
var test = [1,7,-3,9]
console.log(maxNumber(test));

/*Basic Exercise 3*/

function arrayProduct(array) {
	console.log(array);
	var prod = 1;
	for (i=1; i < array.length;i++) {
		prod *= array[i]
	}
	return(prod)
}

console.log(arrayProduct(test));

/*Basic Exercise 4*/

function showImage(source, alt) {
	var img = document.createElement("img");
	img.src = source;
	img.alt = alt;

	document.body.appendChild(img);
}

function pClean(id) {
	document.getElementById(id).innerHTML = "";
}

function weatherForecast() {
	degree = celsius(-5, 40);
	document.getElementById("result").innerHTML = "At the moment it is " + degree + "°C." + "<br>";
	console.log(degree)
	
	var x = 0
	
	if (degree <= 10) {
		x = 1;
	} else if (degree <= 20) {
		x = 2;
	} else if (degree <= 32) {
		x = 3;
	} else if (degree > 32) {
		x = 4
	}
	console.log(x);

	switch (x) {
		case 1:
			showImage("https://cdn.pixabay.com/photo/2017/12/31/15/48/winter-3052622__340.jpg", "cold weather");
			document.getElementById("result").innerHTML = "<br>" + "The weather is cold.";
			break;
		case 2:
			showImage("https://cdn.pixabay.com/photo/2014/12/04/14/46/magnolia-trees-556718__340.jpg", "moderate weather");
			document.getElementById("result").innerHTML = "<br>" + "The weather is moderate";
			break;
		case 3:
			showImage("https://cdn.pixabay.com/photo/2016/12/01/01/22/dog-1874256__340.jpg", "warm weather, cute doggo");
			document.getElementById("result").innerHTML = "<br>" + "The weather is warm";
			break;
		case 4:
			showImage("https://www.piedmont.org/media/BlogImages/Heat%20safety.jpg", "summer heat")
			document.getElementById("result").innerHTML = "<br>" + "The weather is hot";
			break;			
	}
}
