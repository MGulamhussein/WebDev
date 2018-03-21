var person = {
    name: "Maz",
    age: 212,
    occupation: "Software Tester"
};

function ageCheck (){
    if (person.age >= 20 && person.age <=40){
        console.log("person is between 20 and 40 years old")
    }

    else {
        console.log("person is not between 20 and 40 years old")
    }
}

ageCheck();


