class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(radius = 0) {
    super();
    this.radius = radius;
  }

  resize(factor) {
    this.radius *= factor;
  }

  toString() {
    return `A circle of a radius ${this.radius}`;
  }
}

class ColorShape extends Shape {
  constructor(shape, color) {
    super();
    this.shape = shape;
    this.color = color;
  }
  toString() {
    return `${this.shape.toString()} has the color ${this.color}`;
  }
}

class TransparentShape extends Shape {
  constructor(shape, transparency) {
    super();
    this.shape = shape;
    this.transparency = transparency;
  }

  toString() {
    return `${this.shape.toString()} has ${
      this.transparency * 100.0
    } transparency`;
  }
}

const circle = new Circle(2);
console.log(circle.toString());

const redCircle = new ColorShape(circle, 'red');
console.log(redCircle.toString());

const redHalfCircle = new TransparentShape(redCircle, 0.5);
console.log(redHalfCircle.toString());
