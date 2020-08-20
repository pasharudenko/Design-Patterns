class Conveyor {
	setBody() {
		console.log('Body set!');
	}

	getEngine() {
		console.log('Dismantle Engine!');
	}

	setEngine() {
		console.log('Engine set!');
	}

	setInterior() {
		console.log('Interior added!');
	}

	getInterior() {
		console.log('Update interior!');
	}

	setExterior() {
		console.log('Added exterior!');
	}

	setWheels() {
		console.log('Wheels!');
	}

	addElectronics() {
		console.log('Added electronicccs!');
	}

	paint() {
		console.log('Car painted!');
	}
}

class ConveyorFacade {
	constructor(car) {
		this.car = car;
	}

	assembleCar() {
		this.car.setBody();
		this.car.setEngine();
		this.car.setInterior();
		this.car.setExterior();
		this.car.setWheels();
		this.car.addElectronics();
		this.car.paint();
	}

	changeEngine() {
		this.car.getEngine();
		this.car.setEngine();
	}

	changeInterior() {
		this.car.getInterior();
		this.car.setInterior();
	}
}

const conveyor = new ConveyorFacade(new Conveyor());
conveyor.assembleCar();
