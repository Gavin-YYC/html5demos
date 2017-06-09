function greeter(person) {
    return "hello, " + person;
}
var user = 'Gavin';
document.body.innerHTML = greeter(user);
function greeter2(person) {
    return 'hello, ' + person.firstName + " " + person.lastName;
}
var user2 = {
    firstName: "Gavin",
    lastName: "user"
};
document.body.innerHTML = greeter2(user2);
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter3(person) {
    return "hello, " + person.firstName + " " + person.lastName;
}
var user3 = new Student("Gavin", "M", "YYC");
document.body.innerHTML = greeter3(user3);
