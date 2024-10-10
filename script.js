// All scripts starts from hr
const apiky = "296160255e616e95b0b920a97a6193b7"; // My Api kY
const api = "https://api.openweathermap.org/data/2.5/weather?units=metric"; // opn api free
async function gtdata() {
  // async function return promise

  var inpu = document.getElementById("input").value;

  const response = await fetch(api + `&q=${inpu}` + `&appid=${apiky}`);
  if (inpu == "") {// if inputt is MPTY
    document.querySelector(".rro").innerHTML = "Please Input data";
  } else if (response.status == 404) { // IF INPUT IS INVALID
    document.querySelector(".rro").style.display = "block";
    console.log("dd");
    document.querySelector(".rro").innerHTML = "Please Input Valid data";
  } else {           //SHO RSPONS
    document.querySelector(".rro").style.display = "none";
    document.querySelector(".weather").style.display = "block";
    const iconch = document.querySelector(".weather-icon"); // querySelector to gt th imag
    
    // await rspons to g datta from api

    var data = await response.json();

    // sho data from api on frontnd
    document.getElementById("tmp").innerHTML =
      Math.round(data.main.temp) + "`C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    // condition to change weather visual
    if (data.weather[0].main == "Rain") {
      iconch.src = "rain.png";
    } else if (data.weather[0].main == "Clouds") {
      iconch.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
      iconch.src = "clr.png";
    } else if (data.weather[0].main == "Misr") {
      iconch.src = "mist.png";
    } else if (data.weather[0].main == "Drizzle") {
      iconch.src = "drizlu.png";
    }
  }
}
