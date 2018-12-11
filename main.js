class Machine {
	constructor() {
		this.enabled = false;
	}

	turnOn() {
		if (this.enabled) {
			this.enabled = false
		} else {
			this.enabled = true 
		}

	}
	turnOff() {
		if (this.enabled) {
			this.enabled = false
		} else {
			this.enabled = true 
		}
	}
};

class HomeAppliance extends Machine {
	constructor() {
		super();
		this.plugged = false;
	}

	plugIn() {
		if (this.plugged) {
			this.plugged = false
		} else {
			this.plugged = true 
		}
	}
	plugOff() {
		if (this.plugged) {
			this.plugged = false
		} else {
			this.plugged = true 
		}
	}
};

class WashingMachine extends HomeAppliance {
	constructor() {
		super();
	}

	run() {
		console.log('Washing machine is run!');
	}
};

class LightSource extends HomeAppliance {
	constructor() {
		super();
		this.level = 0;
	}
	

	setLevel(level) {
		if (level < 1 || level > 100) {
			console.log('Error Level');
		} else {
			this.level = level;
			console.log('Level: ' + level);
		}
	}
};

class AutoVehicle extends Machine {
	constructor() {
		super();
		this.level = 0;
		this.position = {
			x: 0,
			y: 0
		}
	}

	setPosition(x, y) {
		this.position = {
			x: x,
			y: y
		}
	}
};

class Car extends AutoVehicle {
	constructor() {
		super();
		this.speed = 10;
	}

	setSpeed(speed) {
		this.speed = speed;
	}
	run(x, y) {
		let interval = setInterval( () => {
			let newX = this.position.x + this.speed; 
			if (newX >= x) {
				newX = x;
			} 
			let newY = this.position.y + this.speed;
			if (newY >= y) {
				newY = y;
			} 

			this.setPosition(newX, newY) 
			console.log('Car started!' + newX + ' ' + newY);
			if (newX === x && newY ===y) {
				clearInterval(interval);
			}
		}, 1000)

	}
};