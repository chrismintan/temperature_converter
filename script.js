console.log("it works")

var temperature = parseInt(prompt("What is the temperature?"));
var temperatureUnit = prompt("What is the temperature unit? Type C for Celsius, F for Farenheit and K for Kelvin.")

/**

temperatureInCelsius =
( tempuratureInFahrenheit - 32 ) / 1.8

temperatureInKelvin = temperatureInCelsius + 273

*/

if (temperatureUnit === "C"){
    temperatureInCelsius = temperature;
    temperatureInFahrenheit = (temperatureInCelsius)*(9/5) + 32;
    temperatureInKelvin = temperatureInCelsius + 273;

}else if (temperatureUnit === "F"){
    temperatureInFahrenheit = temperature;
    temperatureInCelsius = (5/9)*(temperatureInFahrenheit - 32);
    temperatureInKelvin = (5/9)*(temperatureInFahrenheit -32) +273;

}else if (temperatureUnit === "K"){
    temperatureInKelvin = temperature;
    temperatureInCelsius = temperatureInKelvin - 273;
    temperatureInFahrenheit = (9/5)*(temperatureInKelvin - 273) + 32;
}

var temps = [ temperatureInFahrenheit, temperatureInCelsius, temperatureInKelvin ];

console.log(temps[0] + " F = " + temps[1] + " C = " + temps[2] + " K");

if (temps[1] < 0){
    console.log("ooh it's cold out");
}else if (temps[1] < 100 && temps[1] > 40){
    console.log("ooh it's hot out");
}else if (temps[1] > 100){
    console.log("you're literally boiling");
};





