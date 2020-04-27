//Object literal.
const movie1 = {
    title: 'Bad boys',
    director: 'Adil El Arbi',
    year: '2020',
    description: function () {
        return `${this.title} was brought out by ${this.director} in ${this.year}.`;
    }
};

const movie2 = {
    title: 'El Dorado',
    director: 'Paul Jacksonol',
    year: '2002',
    description: function () {
        return `${this.title} was brought out by ${this.director} in ${this.year}.`;
    }
};

console.log("Description movie 1:" + movie1.description() +
    "\nDescription movie 2: " + movie2.description());


//Classes.
//Parent class.
class Planet {
    //Constructor.
    constructor(name, radius) {
        this.name = name;
        this.radius = radius;
    }

    getSurfaceArea() {
        let surfaceArea = 4 * Math.PI * Math.pow(this.radius, 2);
        return surfaceArea;
    }

    set gravity(value) {
        this._gravity = value;
    }

    get gravity() {
        return this._gravity;
    }
}
//Class that extends from parent class.
class MushroomPlanet extends Planet {
    constructor(name, width, mushroomType) {
        super(name, width); //Calls parent constructor.
        this.mushroomType = mushroomType;
    }

    getMushroomType() {
        let theMushroom = this.mushroomType.toUpperCase();
        return theMushroom;
    }
}

let paddo = new MushroomPlanet('Paddo', 12000, 'RedWhitePaddo');
paddo.gravity = 55;
console.log(paddo.getMushroomType());
console.log(paddo);


