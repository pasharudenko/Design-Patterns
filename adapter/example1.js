/// Looks like bridge!



class Engine2 {
  simpeInterface() {
    console.log('Engine 2.0 - tr-tr-tr');
  }
}

class EngineV8 {
  complicatedinterface() {
    console.log('Engine V8! - wroom wroom!');
  }
}

class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }
  simpeInterface() {
    this.engine.complicatedinterface();
  }
}

class Auto {
  startEngine(engine) {
    engine.simpeInterface();
  }
}

const myCar = new Auto();
const oldEngine = new Engine2();

myCar.startEngine(oldEngine);

const myCar2 = new Auto();
const engineAdapter = new EngineV8Adapter(new EngineV8());

myCar.startEngine(engineAdapter);
