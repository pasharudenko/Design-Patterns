//Abstaract Factory

class HotDrink {
	consume() {}
}

class Tea extends HotDrink {
	consume() {
		console.log('This tea is nice with lemon!');
	}
}

class Cofee extends HotDrink {
	consume() {
		console.log('This cofee is delicious!');
	}
}

class HotDrinkFactory {
	prepare(amount) {}
}

class TeaFactory extends HotDrinkFactory {
	prepare(amount) {
		console.log(`Put in tea bg, boil water, pour ${amount} ml`);
		return new Tea();
	}
}

class CofeeFactory extends HotDrinkFactory {
	prepare(amount) {
		console.log(`Grind some beans, boil water, pour ${amount} ml`);
		return new Cofee();
	}
}

let AvailableDrink = Object.freeze({
	coffee: CofeeFactory,
	tea: TeaFactory,
});

class HotDrinkMachine {
	constructor() {
		this.factories = {};
		for (let drink in AvailableDrink) {
			this.factories[drink] = new AvailableDrink[drink]();
		}
	}

	makeDrink(name, amount) {
		return this.factories[name].prepare(amount);
	}

	// makeDrink(type) {
	// 	switch (type) {
	// 		case 'tea':
	// 			return new TeaFactory().prepare(200);
	// 		case 'coffee':
	// 			return new CofeeFactory().prepare(50);
	// 		default:
	// 			throw new Error('');
	// 	}
	// }
}

let machine = new HotDrinkMachine();

machine.makeDrink('tea', 150).consume();
machine.makeDrink('coffee', 150).consume();

console.log(machine);

// let drink = machine.makeDrink('tea');
// drink.consume();
