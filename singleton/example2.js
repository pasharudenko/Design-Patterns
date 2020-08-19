class CheifExecutiveOfficer {
  get name() {
    return CheifExecutiveOfficer._name;
  }

  set name(value) {
    CheifExecutiveOfficer._name = value;
  }
}


const john = new CheifExecutiveOfficer();
john.name = 'John';


const jack = new CheifExecutiveOfficer();
jack.name = 'Jack';

console.log(john.name);
console.log(jack.name);