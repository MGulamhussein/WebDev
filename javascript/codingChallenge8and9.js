var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

function squadInfo() {
    var superHeroes = request.response;
    var squadDetails = "Name: "+superHeroes.squadName + "<br> Home Town: " +superHeroes.homeTown + "<br> Formed: " + superHeroes.formed + "<br> Secret Base: " + superHeroes.secretBase + "<br>";
    document.getElementById("superSquadDetails").innerHTML = squadDetails;
}

function memberInfo() {
    var superHeroes = request.response;
    var heroList = "";
    for (var i in superHeroes.members) {

        heroList += "<br> Name:" + superHeroes.members[i].name;
        heroList += "<br> Members:" + superHeroes.members[i].age;
        heroList += "<br> Secret Identity:" + superHeroes.members[i].secretIdentity;
        heroList += "<br> Powers: ";
        for (var j in superHeroes.members) {
            heroList += superHeroes.members[i].powers[j] + "<br>";
        }
    }

    document.getElementById("superSquad").innerHTML = heroList;
}