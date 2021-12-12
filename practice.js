const myObject = {
    fullName: "Kelli Stone",
    favePup: "Izzie",
    likesRunning: true,
    faveColor: "orange"

};

// console.log(myObject.fullName);
console.log(myObject['favePup']);
myObject.faveColor = 'green';
myObject.faveFood = "nachos";
delete myObject.likesRunning;

console.log(myObject);

const digitalCraftsCrew = [
    "Jamie",
    "Dr. Vicki",
    "Jada",
    "Athena",
    "Dee",
    "Ernesto",
    "Robbie"
    ];

digitalCraftsCrew.pop();    
console.log(digitalCraftsCrew.indexOf("Jada"));
console.log(digitalCraftsCrew);


    