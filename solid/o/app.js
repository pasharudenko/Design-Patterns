//Open Closed Principle

let Color = Object.freeze({
  red: 'red',
  green: 'green',
  blue: 'blue',
});

let Size = Object.freeze({
  small: 'small',
  medium: 'medium',
  large: 'large',
});

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

//Open for extansion, closed for modification

class ProductFilter {
  filterByColor(products, color) {
    return products.filter(p => p.color === color);
  }

  filterBySize(products, size) {
    return products.filter(p => p.size === size);
  }

  filterBySizeAndColor(products, size, color) {}

  // state space explosion
}

class Specification {
  constructor() {
    if (this.constructor.name === 'Specification')
      throw new Error('Specification is abstract!');
  }
  isSatisfied() {}
}

class ColorSpecification extends Specification {
  constructor(color) {
    super();
    this.color = color;
  }

  isSatisfied(item) {
    return item.color === this.color;
  }
}

class SizeSpecification extends Specification {
  constructor(size) {
    super();
    this.size = size;
  }

  isSatisfied(item) {
    return item.size === this.size;
  }
}

class AndSpecification {
  constructor(...specs) {
    this.specs = specs;
  }

  isSatisfied(item) {
    return this.specs.every(x => x.isSatisfied(item));
  }
}

class BetterFilter {
  filter(items, spec) {
    return items.filter(x => spec.isSatisfied(x));
  }
}

let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.large);

let products = [apple, tree, house];
let pf = new ProductFilter();

// console.log(`Green products (old):`);

// for (let p of pf.filterByColor(products, Color.green)) {
//   console.log(` * ${p.name} is green`);
// }

//////////////

let bf = new BetterFilter();

// console.log(`Green products (new):`);

// for (let p of bf.filter(products, new ColorSpecification(Color.green))) {
//   console.log(` * ${p.name} is green`);
// }

//console.log(`Large and green products:`);

let specs = new AndSpecification(
  new ColorSpecification(Color.green),
  new SizeSpecification(Size.large)
);

console.log(bf.filter(products, specs));

// for (let p of bf.filter(products, specs)) {
//  console.log(` * ${p.name} is large and green`);
// }
