var person = {
    name: "Maz",
    age: 212,
    occupation: "Software Tester"
};

function ageCheck() {
    if (person.age >= 20 && person.age <= 40) {
        console.log("person is between 20 and 40 years old")
    } else {
        console.log("person is not between 20 and 40 years old")
    }
}

ageCheck();

function fizzBuzz() {
    var numberList = [];
    for (var i = 0; i < 100; i++) {
        numberList[i] = i + 1;
        if (numberList[i] % 3 === 0 && numberList[i] % 5 === 0) {
            numberList[i] = "FizBuzz";
        } else if (numberList[i] % 3 === 0) {
            numberList[i] = "Fizz";
        } else if (numberList[i] % 5 === 0) {
            numberList[i] = "Buzz";
        }
    }
    console.log(numberList)
}

function dividingLoop() {
    var random = Math.round((Math.random() * 1000) + 1);
    random *= 100;
    while (random != 1) {
        console.log(random);

        if (random % 3 === 0) {
            random /= 3;
        } else if (random % 3 === 1) {
            random--
        } else {
            random++
        }
    }
    console.log(random);
}