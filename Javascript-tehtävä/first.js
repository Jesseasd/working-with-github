// Counter muuttujat
let clicks1 = 0;
let clicks2 = 0;
let clicks3 = 0;

// Määritellään kuvakkeet näkymättömiksi
document.getElementById("thermostat").style.display = "none"
document.getElementById("air").style.display = "none"
document.getElementById("cloud").style.display = "none"

function getTemperature(){
    
    // Luodaan HTTP pyyntö
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=oulu&units=metric&appid=23cfeea3681cab21bd1e170d2d87f2e7", true);

    // Lähetetään pyyntö
    xmlhttp.send();

    // Luodaan tapahtuma käsittelijä
    xmlhttp.onreadystatechange=function() {
    
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {

            let data = JSON.parse(xmlhttp.response);
            
            // Tulostetaan lämpötila
            document.getElementById("temp").innerHTML = "Temperature is currently: " + data["main"]["temp"] + " &#8451";;
        }
    }

    // Counter -funktio
    function click() {
        clicks1 += 1;
    };

    click();

    // Counterin ollessa parillinen näytetään lämpötila ja kuvake
    // Muuten näytetään otsikkoteksti
    if (clicks1 % 2 == 0) {
        document.getElementById("temp-text").style.display = "block"
        document.getElementById("temp").style.display = "none"
        document.getElementById("thermostat").style.display = "none"
    } else {
        document.getElementById("temp-text").style.display = "none"
        document.getElementById("temp").style.display = "block"
        document.getElementById("thermostat").style.display = "block"
    }
}

function getDescription(){
    
    // Luodaan HTTP pyyntö
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=oulu&appid=23cfeea3681cab21bd1e170d2d87f2e7", true);
    
    // Lähetetään pyyntö
    xmlhttp.send();

    // Luodaan tapahtuma käsittelijä
    xmlhttp.onreadystatechange=function() {
        
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {

            let data = JSON.parse(xmlhttp.response);
            
            // Tulostetaan kuvaus
            document.getElementById("desc").innerHTML = "Currently it's " + data["weather"]["0"]["description"];
        }
    }
    
    // Counter -funktio
    function click() {
        clicks2 += 1;
    };

    click();

    // Counterin ollessa parillinen näytetään kuvaus ja kuvake
    // Muuten näytetään otsikkoteksti
    if (clicks2 % 2 == 0) {
        document.getElementById("desc-text").style.display = "block"
        document.getElementById("desc").style.display = "none"
        document.getElementById("cloud").style.display = "none"
    } else {
        document.getElementById("desc-text").style.display = "none"
        document.getElementById("desc").style.display = "block"
        document.getElementById("cloud").style.display = "block"
    }
}

function getWind(){
    
    // Luodaan HTTP pyyntö
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=oulu&appid=23cfeea3681cab21bd1e170d2d87f2e7", true);

    // Lähetetään pyyntö
    xmlhttp.send();

    // Luodaan tapahtuma käsittelijä
    xmlhttp.onreadystatechange=function() {
        
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {

            let data = JSON.parse(xmlhttp.response);
            
            // Tulostetaan tuulen nopeus
            document.getElementById("wind").innerHTML = "Wind speed is currently: " + data.wind.speed + " m/s";
        }
    }

    // Counter -funktio
    function click() {
        clicks3 += 1;
    };

    click();

    // Counterin ollessa parillinen näytetään tuulen nopeus ja kuvake
    // Muuten näytetään otsikkoteksti
    if (clicks3 % 2 == 0) {
        document.getElementById("wind-text").style.display = "block"
        document.getElementById("wind").style.display = "none"
        document.getElementById("air").style.display = "none"
    } else {
        document.getElementById("wind-text").style.display = "none"
        document.getElementById("wind").style.display = "block"
        document.getElementById("air").style.display = "block"
    }
}