function squared() {
    window.alert(document.getElementById("number").value ** 2);
}
function sumOfThree(num1, num2, num3) {
    return num1 + num2 + num3
}

var person = {
    name: "Maz",
    age: 21,
    occupation: "Software Tester"
};

function addAge () {
    person.age ++
    window.alert (person.age) ;
}