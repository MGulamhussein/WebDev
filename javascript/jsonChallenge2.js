"use strict";
var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


function kingHouse() {
    var KingList = request.response;
    var houseElement = document.createElement("p");

    for (var i in KingList) {
        if (KingList[i].hse.toUpperCase().includes(document.getElementById("houseFilter").value.toUpperCase())) {
            houseElement.innerHTML += KingList[i].nm + "<br>" + KingList[i].cty + "<br>" + KingList[i].hse + "<br>" + KingList[i].yrs + "<br><br>";
            document.getElementById("mainBody").appendChild(houseElement);
        }
    }
}

function kingName() {
    var KingList = request.response;
    var nameElement = document.createElement("p");

    for (var i in KingList) {
        if (KingList[i].nm.toUpperCase().includes(document.getElementById("nameFilter").value.toUpperCase())) {
            nameElement.innerHTML += KingList[i].nm + "<br>" + KingList[i].cty + "<br>" + KingList[i].hse + "<br>" + KingList[i].yrs + "<br><br>";
            document.getElementById("mainBody").appendChild(nameElement);
        }
    }
}