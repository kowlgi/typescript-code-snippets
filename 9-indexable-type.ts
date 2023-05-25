interface Car {
    make: string;
    color: string;
    [wildcard: string]: string;
    price?: number; // type error: as you can't have optional properties when interface has an indexable type
}

let car: Car = {make: 'Ferrai', color: 'Black', owner: "Enzo"};