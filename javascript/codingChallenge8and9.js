var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json'
request.send();
request.onload = function () {
    var superHeroes = request.response;
    console.log(superHeroes.members)
}