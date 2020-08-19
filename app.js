class Person {
  constructor() {
    this.age = 31;
  }

  greet() {
    console.log(this);
  }
}


const person = new Person();
console.log(person);



function PersonOld() {
  this.age = 31;

  this.greet = () => {
    console.log(this);
  }
}



const person2 = new PersonOld();

console.log(person2);
