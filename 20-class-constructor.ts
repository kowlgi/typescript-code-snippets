class Furniture {
    legs: number;
    price: number;
    static carve(furniture: Furniture) {
        console.log(furniture.price);
    }
    constructor(legs: number, price: number) {
        this.legs = legs;
        this.price = price;
    }
}

type FurnitureConstructor = typeof Furniture;

function makeFurniture(constructor: FurnitureConstructor) {
    let table = new constructor(10, 1000);
    constructor.carve(table);
}

interface YetAnotherFurnitureConstructor<Furniture> {
    new (carvingTime: number): Furniture;
    carvingTime: number;
    assignCarpenter(furniture: Furniture): void;
}

function makeATable(constructor: YetAnotherFurnitureConstructor<Furniture>){
    let table = new constructor(1000);
    constructor.assignCarpenter(table);
}