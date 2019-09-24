function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var current_temperature = randomIntFromInterval(-5, 40)

console.log(current_temperature)

var weather_status_pic
var weather_status

if (current_temperature >= -5 && current_temperature <= 20 ) {weather_status="cold";}
	else if (current_temperature >= 21 && current_temperature <= 25) {weather_status="moderate";}
	else {weather_status="hot";}

document.write(weather_status);

if (weather_status=="cold") {weather_status_pic="https://cdn.pixabay.com/photo/2014/02/07/10/19/winter-260817_960_720.jpg";}
	else if (weather_status=="moderate") {weather_status_pic="https://cdn.pixabay.com/photo/2017/01/11/14/56/ireland-1971997_960_720.jpg";}
	else {weather_status_pic="https://cdn.pixabay.com/photo/2017/06/11/02/05/summer-2391348_960_720.jpg";}

document.getElementById("ooo").src=weather_status_pic;

var array_number = [1,7,-3,9];

var highest_number = Math.max.apply(Math, array_number);

document.write("<br>");
document.write(highest_number);

var array_number2 = [1, 3, 7 , 10, 2],
	s = 0,
	p = 1,
	i = 0;

for (i = 0; i < array_number2.length; i += 1)
	{
	s += array_number2[i];
	p *= array_number2[i];
	}

document.write("<br>");
document.write("Sum: " +s + " Product :" +p);
