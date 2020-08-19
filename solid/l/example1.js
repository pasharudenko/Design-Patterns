// Function that uses class method should work properly with all sub classes too

/** Wrong! */
class Bird {
	fly() {
		console.log('I can fly!');
	}
}

class Duck extends Bird {}
class Penguin extends Bird {
	fly() {
		console.log('I can not fly!');
	}
}

const makeBirdFly = bird => {
	bird.fly();
};

makeBirdFly(new Duck());
makeBirdFly(new Penguin());

/** Right! */

class FlyingBird {
	fly() {
		console.log('I can fly!');
	}
}

class SwimmingBird {
	swim() {
		console.log('I can swim!');
	}
}

class Duck extends FlyingBird {}
class Penguin extends SwimmingBird {}

const makeBirdFly = flyingBird => {
	flyingBird.fly();
};

const makeBirdSwim = swimmigBird => {
	swimmigBird.swim();
};
