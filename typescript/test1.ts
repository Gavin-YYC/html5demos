function greeter (person: string) {
    return "hello, " + person;
}

var user = 'Gavin';

document.body.innerHTML = greeter(user);

interface Person {
    firstName: string;
    lastName: string;
}

function greeter2(person: Person) {
    return 'hello, ' + person.firstName + " " + person.lastName;
}

var user2 = {
    firstName: "Gavin",
    lastName: "user"
}

document.body.innerHTML = greeter2(user2)






class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person2 {
    firstName: string;
    lastName: string;
}

function greeter3 (person: Person2) {
    return "hello, " + person.firstName + " " + person.lastName;
}

var user3 = new Student("Gavin", "M", "YYC");

document.body.innerHTML = greeter3( user3 );

































