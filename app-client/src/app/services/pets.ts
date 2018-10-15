// pet classes
export class Pet {
    type: string;
    price: number;
    color: string;

    constructor(price, color) {
        this.type = '';
        this.price = price;
        this.color = color;
    }
}

export class Dog extends Pet {
    name: string;

    constructor(name, price, color) {
        super(price, color);
        this.type = 'Dog';
        this.name = name;
    }
}

export class Cat extends Pet {
    name: string;
    fluffy: boolean;

    constructor(name, price, color, fluffy) {
        super(price, color);
        this.type = 'Cat';
        this.name = name;
        this.fluffy = fluffy;
    }
}

export class Hamster extends Pet {
    fluffy: boolean;

    constructor(price, color, fluffy) {
        super(price, color);
        this.type = 'Hamster';
        this.fluffy = fluffy;
    }
}
