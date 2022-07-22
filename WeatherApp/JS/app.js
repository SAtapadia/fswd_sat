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

function GetWeather() {

let locObj = document.getElementById("txtloc").value;

let rqt = new XMLHttpRequest();
let url = `https://api.openweathermap.org/data/2.5/weather?q=${locObj}&appid=93f26e3c57081a6210de53b8dcfdfea4`;

rqt.open('GET',url, true);

rqt.onload = function() {
    if(rqt.status==200)
    {
        let dataObj = JSON.parse( rqt.responseText );

        document.getElementById("hloc").textContent =  dataObj.name + ", " + dataObj.sys.country;
        document.getElementById("htemps").innerHTML = convertTemp(dataObj.main.temp) + "<span>&#176; C</span>"  ;

                
        //alert(dataObj.weather[0].main);
        document.getElementById("spWeathDesc").textContent  =  dataObj.weather[0].main + ", " + dataObj.weather[0].description;
        document.getElementById("spfeel").innerHTML = "Feels like " + convertTemp(dataObj.main.feels_like) + "&#176; C";
        document.getElementById("spday").innerHTML = "Day " + convertTemp(dataObj.main.temp_max) + "&#176; C .";
        document.getElementById("spnght").innerHTML = " Night " + convertTemp(dataObj.main.temp_min) + "&#176; C";

      //  alert(`http://openweathermap.org/img/w/${dataObj.weather[0].icon}.png`);
       // document.getElementById("divImg").innerHTML = `<img  src='http://openweathermap.org/img/w/${dataObj.weather[0].icon}.png' class='img-fluid rounded-top' >`;
        //alert(`<img  src='http://openweathermap.org/img/w/${dataObj.weather[0].icon}.png' class='img-fluid rounded-top' >`);
        //.attr("src") =  `http://openweathermap.org/img/w/${dataObj.weather[0].icon}.png`;
        
    }
}


rqt.send();


rqt.onerror = function() {
    console.log("Error.!");
}
}

function convertTemp(vtemp)
{
    return (Math.floor(vtemp - 273.15));
}