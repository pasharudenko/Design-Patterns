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

let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.large);

let products = [apple, tree, house];

class ColorSpecification {
  constructor(color) {
    this.color = color;
  }

  isSatisfied(item) {
    return item.color === this.color;
  }
}

class SizeSpecification {
  constructor(size) {
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
    return this.specs.every(spec => spec.isSatisfied(item));
  }
}

class OrSpecification {
  constructor(...specs) {
    this.specs = specs;
  }

  isSatisfied(item) {
    return this.specs.some(spec => spec.isSatisfied(item));
  }

}

class ProductFilter {
  filter(products, spec) {
    return products.filter(product => spec.isSatisfied(product));
  }
}

console.log(products);

console.log(
  new ProductFilter().filter(products, new ColorSpecification(Color.green))
);
console.log(
  new ProductFilter().filter(products, new SizeSpecification(Size.large))
);
console.log(
  new ProductFilter().filter(
    products,
    new AndSpecification(
      new ColorSpecification(Color.green),
      new SizeSpecification(Size.large)
    )
  )
);
console.log(
  new ProductFilter().filter(
    products,
    new OrSpecification(
      new ColorSpecification(Color.blue),
      new SizeSpecification(Size.small)
    )
  )
);
