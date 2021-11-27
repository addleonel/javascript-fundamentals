
// Inheritance and Polymorphism in Javascript
// =========================
// more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#sub_classing_with_extends

class Hero {
    constructor (name, level) {
        this.name = name;
        this.level = level;
    }

    greet() {
        console.log(`Hi everyone, my name is ${this.name} and my level is ${this.level}`);
    }
}

class SpiderMan extends Hero {
    constructor (name, level, power) {
        super(name, level);
        this.power = power;
    }

    spiderWeb() {
        console.log('Make spider web');
    }

    greet() {
        super.greet();
        console.log(`And my power is ${this.power}`);
    }
}

class CaptainAmerica extends Hero {
    constructor(name, level, honor) {
        super(name, level);
        this.honor = honor;
    }

    punch() {
        console.log("Make punch");
    }

    greet() {
        super.greet();
        console.log(`And my honor is ${this.honor}`);
    }
}

let anyhero = new Hero("Tom", "mediam");
let spiderman1 = new SpiderMan("Peter", "High", "Spider web");
let captainamerica1 = new CaptainAmerica("Steve", "High", "Super strength");

// polymorphism 
anyhero.greet();
spiderman1.greet();
captainamerica1.greet();

