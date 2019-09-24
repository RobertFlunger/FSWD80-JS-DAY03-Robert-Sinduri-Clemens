
var grades = [];

for (i=0; i<5; i++) {
	grades[i] = parseInt(prompt("Enter a Grade"));
}


document.write("Martin's grade = " + grades[0] + "<br>");
document.write("Thomas's grade = " + grades[1] + "<br>");
document.write("Klaus's grade = " + grades[2] + "<br>");
document.write("Maria's grade = " + grades[3] + "<br>");
document.write("David's grade = " + grades[4] + "<br>");

function result() {
	var sum = 0;
	for (j=0; j<grades.length; j++) {
		sum += grades[j];
	}
	var avg = sum/grades.length;
	document.write("The average grade is " + avg + "<br>");
	if (avg < 60) {
		document.write("The class failed");
	} else if (avg>=60 && avg <70) {
		document.write("The class got a D grade");
	} else if (avg>=70 && avg <80) {
		document.write("The class got a C grade");
	} else if (avg>=80 && avg <90) {
		document.write("The class got a B grade");
	} else if (avg>=90 && avg <=100) {
		document.write("The class got a A grade");
	} else {
		document.write("The class either too good or too bad");
	}
}

result();