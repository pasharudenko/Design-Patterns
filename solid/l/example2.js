// Function that uses class method should work properly with all sub classes too

/** Wrong! */

class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	setWidth(width) {
		this.width = width;
	}

	setHeight(height) {
		this.height = height;
	}

	getArea() {
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	constructor(size) {
		super(size, size);
	}

	setWidth(width) {
		this.width = this.height = width;
	}

	setHeight(height) {
		this.height = this.width = height;
	}
}

const increaseHeightAndGetArea = rectangle => {
	rectangle.setHeight(++rectangle.height);
	return rectangle.getArea();
};

console.log(increaseHeightAndGetArea(new Rectangle(5, 5)));
console.log(increaseHeightAndGetArea(new Square(5, 5)));

/** Right! */


/** As another option instead of extending Figure class you can implement Figure interface with setWidth, setHeight, getArea methods */

class Figure {
	getArea() {
		return this.width * this.height;
	}
}

class Rectangle extends Figure {
	constructor(width, height) {
        super();
		this.width = width;
		this.height = height;
	}

	setWidth(width) {
		this.width = width;
	}

	setHeight(height) {
		this.height = height;
	}
}

class Square extends Figure {
	constructor(size) {
        super();
		this.width = this.height = size;
	}

	setWidth(width) {
		this.width = this.height = width;
	}

	setHeight(height) {
		this.height = this.width = height;
	}
}

const increaseRectangleHeightAndGetArea = rectangle => {
	rectangle.setHeight(++rectangle.height);
	return rectangle.getArea();
};

const increaseSquareHeightAndGetArea = square => {
	square.setHeight(++square.height);
	return square.getArea();
};


console.log(increaseRectangleHeightAndGetArea(new Rectangle(5, 5)));
console.log(increaseSquareHeightAndGetArea(new Square(5, 5)));
