alert("Первое задание");
alert("Программа перевода значения температуры\nиз градусов Цельсия в градусы по Фаренгейту");

var MIN_TEMPERATURE_CELSIUS = -273; //абсолютный ноль температуры в градусах Цельсия

do {
    var temperatureCelsius = +prompt("Введите значение температуры в градусах Цельсия");
    if (temperatureCelsius < MIN_TEMPERATURE_CELSIUS) {
        alert("Температура в градусах Цельсия не может быть ниже -273");
    }
} while (isNaN(temperatureCelsius) || temperatureCelsius < MIN_TEMPERATURE_CELSIUS)
    
var temperatureFahrenheit = (9 / 5) * temperatureCelsius + 32;  //формула перевода из градусов Цельсия в градусы Фаренгейта

alert ("Температуре в "+temperatureCelsius+" °С соответcтвует "+ temperatureFahrenheit.toFixed(2)+" °F");