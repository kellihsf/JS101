const myObject = {
    fullName: "Kelli Stone",
    favePup: "Izzie",
    likesRunning: true,
    faveColor: "orange"

};

console.log(myObject.fullName);
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

const myList = ["apples", "oranges", "bread", "yogurt"];

const myListString = myList.join(", ");
console.log(myListString);

const todoString = 'pet the cat! go to work! shop for groceries! go home! feed the cat';
const todos = todoString.split('! ');
console.log(todos);

const findIndex = myList.indexOf("apples");
console.log(findIndex);
const todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]

const howMany = todos.length;

function areYouBusy(howMany) {
    if (howMany === 0) {
        console.log('All done!');
    } else if (howMany === 1) {
        console.log('You have 1 thing left to do.');
    } else {
        console.log(`You have ${howMany} things left to do.`);
    }
}

areYouBusy(2);
areYouBusy(0);

// while loops comment out for now, one is infinite loop need to check
// let n = 1;
// while (n <= 10) {
//   console.log(n);
//   //n = n + 1;
//   // n += 1;    // addition assignment operator 
//   n++;          // Increment operator
// }

// let q = 10;
// while (q > 0) {
//   console.log(q);
//   n--;			// decrement operator
// }
