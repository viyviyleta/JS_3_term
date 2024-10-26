class Human {
    constructor(firstName, lastName, birthYear, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.address = address;
    }

    get age() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    set age(newAge) {
        const currentYear = new Date().getFullYear();
        this.birthYear = currentYear - newAge;
    }

    setAddress(newAddress) {
        this.address = newAddress;
    }
}

class Student extends Human {
    constructor(firstName, lastName, birthYear, address, faculty, course, group, recordBook) {
        super(firstName, lastName, birthYear, address);
        this.faculty = faculty;
        this.course = course;
        this.group = group;
        this.recordBook = recordBook; 
    }

    setCourse(newCourse) {
        this.course = newCourse;
    }

    setGroup(newGroup) {
        this.group = newGroup;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getFacultyCode() {
        return this.recordBook.charAt(0); 
    }

    getSpecialtyCode() {
        return this.recordBook.charAt(1);
    }
}

class Faculty {
    constructor(name, numGroups, numStudents) {
        this.name = name;
        this.numGroups = numGroups;
        this.numStudents = numStudents;
        this.students = []; 
    }

    addStudent(student) {
        this.students.push(student);
        this.numStudents++;
    }

    setNumGroups(newNumGroups) {
        this.numGroups = newNumGroups;
    }

    setNumStudents(newNumStudents) {
        this.numStudents = newNumStudents;
    }

    getDev() {
        return this.students.filter(student => student.getSpecialtyCode() === '3');
    }

    getGroup(groupNumber) {
        return this.students.filter(student => student.group === groupNumber);
    }
}

const student1 = new Student("Alex", "Petrov", 2000, "Minsk", "FIT", 3, 10, "73201301");
const student2 = new Student("Maria", "Ivanova", 2001, "Minsk", "FIT", 2, 10, "71202302");
const student3 = new Student("Sasha", "Novik", 2002, "Minsk", "FIT", 1, 5, "71203303");

const fitFaculty = new Faculty("FIT", 10, 300);

fitFaculty.addStudent(student1);
fitFaculty.addStudent(student2);
fitFaculty.addStudent(student3);

console.log(student1.getFullName()); 
console.log(student1.age); 
student1.age = 23; 
console.log(student1.birthYear); 

console.log(fitFaculty.getDev());
console.log(fitFaculty.getGroup(10)); 

student1.setCourse(3);
student1.setGroup(11);
console.log(student1.course);
console.log(student1.group); 

