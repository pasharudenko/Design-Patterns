// CoordinateSystem = {
// 	cartesian: 0,
// 	polar: 1,
// };

// class Point {
// 	constructor(a, b, cs = CoordinateSystem.cartesian) {
// 		switch (cs) {
// 			case CoordinateSystem.cartesian:
// 				this.x = a;
// 				this.y = b;
// 				break;
// 			case CoordinateSystem.polar:
// 				this.x = a * Math.cos(b);
// 				this.y = a * Math.sin(b);
// 				break;
// 		}
// 	}
// }


// FACTORY METHODS

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	static newCartesianPoint(x, y) {
		return new Point(x, y);
	}

	static nePolarPoint(rho, theta) {
		return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
	}
}
