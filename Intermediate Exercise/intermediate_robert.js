/*Intermediate Exercise 1*/
var grades = [76, 85, 65, 93, 81];
console.log(grades);

/*Function START*/
function GPA(grades) {

	var sum = grades[0]
	for (i=1;i<grades.length;i++) {
		sum += grades[i];
	}

	var avg = sum/grades.length
	console.log(avg)
	
	var z = 0
	if (avg < 60) {
		z = 1;
	} else if (avg < 70) {
		z = 2;
	} else if (avg < 80) {
		z = 3;
	} else if (avg < 90) {
		z = 4;
	} else {
		z = 5;
	}

	switch(z) {
		case 1:
			document.getElementById("grades").innerHTML = "Average class points: " + avg + "<br>" + "Average class grade: F." + "<br>";
			break;		
		case 2:
			document.getElementById("grades").innerHTML = "Average class points: " + avg + "<br>" + "Average class grade: D." + "<br>";
			break;
		case 3:
			document.getElementById("grades").innerHTML = "Average class points: " + avg + "<br>" + "Average class grade: C." + "<br>";
			break;		
		case 4:
			document.getElementById("grades").innerHTML = "Average class points: " + avg + "<br>" + "Average class grade: B." + "<br>";
			break;		
		case 5:
			document.getElementById("grades").innerHTML = "Average class points: " + avg + "<br>" + "Average class grade: A." + "<br>";
			break;
	}
}

GPA(grades)

/*Intermediate Exercise 2 - Fizzbuzz*/

function generateInteger(n) {
	var x = [];
	for (i=1;i<=n;i++) {
		x.push(i);
	}
	return(x)
}

function FizzBuzz(n) {
	var y = []
	var y = generateInteger(n);
	for (i=1;i<n;i++) {
		if  (i % 3 == 0 && i % 5 == 0) {
			y[i-1] = "FizzBuzz";
		} else if (i % 5 == 0) {
			y[i-1] = "Buzz";
		} else if (i % 3 == 0) {
			y[i-1] = "Fizz";
		} 
	}
	return(y)
}

console.log(FizzBuzz(100))