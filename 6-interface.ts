interface Car {
    color: string;
    numberPlate: string;
    wheels: number;
}

interface Auto {
    color: string;
    numberPlate: string;
    wheels: number;
}

const car: Car = { wheels: 4, color: "Red", numberPlate: "KA-05"};
const motorbike: Car = {wheels: 2, numberPlate: "KA-09", color: "Blue"};
let cars: Car[] = [];
cars.push(car);

let auto: Auto = {wheels: 3, color: "Black", numberPlate: "KA-07"};
cars.push(auto); // this works, because Auto and Car interface have the exact same shape.

// interfaces can inherit
interface RaceCar extends Car {
    hp: number;
}

// "Declaration merging": interfaces are additive
interface RaceCar {
    owner: string;
}

let ferrari: RaceCar = {color: "Red", wheels: 4, numberPlate: "BYC", hp: 1900, owner: "Enzo"};