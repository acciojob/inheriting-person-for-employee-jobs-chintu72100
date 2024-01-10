// Person constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add greet() method to Person prototype
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Employee constructor function
function Employee(name, age, jobTitle) {
    // Call the Person constructor to initialize name and age
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// Inherit the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add jobGreet() method to Employee prototype
Employee.prototype.jobGreet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    console.log(`My job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

// Example usage
const employee1 = new Employee("Bob", 30, "Manager");
employee1.jobGreet();
