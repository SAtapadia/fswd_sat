/*
Create request Obj
Set URL
Onload request
Send Request
OnError
Onsuccess
`http://openweathermap.org/img/w/${iconcode} .png`  --> icon image00:11 A

http://openweathermap.org/img/w/09d.png
*/

//
  
async function GetWeather() {

let locObj = document.getElementById("txtloc").value;

let urlobj = `https://api.openweathermap.org/data/2.5/weather?q=${locObj}&appid=93f26e3c57081a6210de53b8dcfdfea4`;

let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', urlobj);
    req.onload = function() {
      if (req.status == 200) {

       resolve(req.response);

      } 
      else {
        resolve("Data not Found");
      }
    };
    req.send();
  });

  let dataObj = JSON.parse(await myPromise);

        document.getElementById("hloc").textContent =  dataObj.name + ", " + dataObj.sys.country;
        document.getElementById("htemps").innerHTML = convertTemp(dataObj.main.temp) + "<span>&#176; C</span>"  ;

        document.getElementById("spWeathDesc").textContent  =  dataObj.weather[0].main + ", " + dataObj.weather[0].description;
        document.getElementById("spfeel").innerHTML = "Feels like " + convertTemp(dataObj.main.feels_like) + "&#176; C";
        document.getElementById("spday").innerHTML = "Day " + convertTemp(dataObj.main.temp_max) + "&#176; C .";
        document.getElementById("spnght").innerHTML = " Night " + convertTemp(dataObj.main.temp_min) + "&#176; C";

}

function convertTemp(vtemp)
{
    return (Math.floor(vtemp - 273.15));
}