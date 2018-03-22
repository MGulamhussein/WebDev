stringFunction();


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

function addAge() {
    person.age++
        window.alert(person.age);
}

function stringFunction() {
    var stringExample = 'He said "my name is elliot "';
    stringExample = stringExample.toUpperCase();
    document.write((stringExample));
}

var myList = ["apples", "oranges", "bananas"];
for (var i in myList) {
    console.log(myList[i]);
}
myList[myList.length] = "kiwi";
for (var i in myList) {
    console.log(myList[i]);
}
myList.splice(2, 1);
for (var i in myList) {
    console.log(myList[i]);
}