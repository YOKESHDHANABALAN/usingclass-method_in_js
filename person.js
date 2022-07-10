class person{
    constructor(firstname, lastname, age, place){
        this.firstname=firstname;
        this.lastname=lastname;
        this.gender=gender;
        this.age=age;
        this.place=place;
    }
    getDetails(){
        return(`The name of a person ${this.firstname} ${this.lastname} and gender of the person ${this.gender}, person age is ${this.age} and lives in ${this.place}`);
    }
}
let person1 = new person ("Guvi","Geek","M","10","chennai");
let person2 = new person ("Ms","Dhoni","M","41","mumbai");
console.log(person1.getDetails(),person2.getDetails());