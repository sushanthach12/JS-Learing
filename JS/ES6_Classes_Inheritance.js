console.log('ES6 Classes and Inheritance');

class Employee {
    constructor(givenName, givenExpirence, givenDivision) {
        this.name = givenName;
        this.expirence = givenExpirence;
        this.division = givenDivision;
    }
    slogan(){
        return `Iam ${this.name} and this company is the best`
    }
    joiningYear(){
        return 2020 - this.expirence;
    }
    static add(a,b){
        return a+b;
    }
}

class Programmer extends Employee{
    constructor(givenName, givenExpirence, givenDivision, language,github) {
        super(givenName, givenExpirence, givenDivision); // Super : superclass contructor se value ko lena
        this.language = language;
        this.github = github;
    }
    favoriteLanguage(){
        if(this.language == 'python'){
            return 'python';
        }else{
            return 'Javascript';
        }
    }
    static multiply(a,b){
        return a*b;
    }
}

// let sush = new Employee('Sushanth',7,5);
// console.log(sush.joiningYear());
// console.log(Employee.add(10,4));

let rohan = new Programmer('Rohan',3,'Lays', 'Go','Github');
console.log(rohan);
console.log(rohan.favoriteLanguage());
console.log(Programmer.multiply(34,45));
