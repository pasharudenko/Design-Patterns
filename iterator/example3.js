const company = {
  employees: ['Max', 'Anna', 'Manu'],
  [Symbol.iterator]: function* getEmployee() {
    for (const employees of this.employees) {
      yield employees;
    }
  },
};

for (const employees of company) {
  console.log(employees);
}

class Stuff {
  constructor() {
    this.a = 11;
    this.b = 22;
  }

  *[Symbol.iterator]() {
    let index = 0;
    while (index <= 1) {
      if (index === 0) {
        yield this.a;
        index++;
      } else {
        yield this.b;
        index++;
      }
    }
  }
}

const stuff = new Stuff();

for (const props of stuff) {
  console.log(props);
}

class Reply {
  constructor(...args) {
    this.args = args;
  }
  *getReply(msg) {
    for (let arg in this.args) {
      let reply = msg + this.args[arg];
      yield reply;
    }
  }
}

const reply = new Reply('Peter', 'James', 'John');

var r = reply.getReply('Hello ');

for (val of r) {
  console.log(val);
}
